import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { Artwork, ArtworkCard } from '../components/ArtworkCard';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import { getArtworks } from '../utils/getArtworks';

interface HomePageProps {
  artworks: Artwork[];
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const artworks = await getArtworks();

  return {
    props: {
      artworks,
    },
  };
};

export default function Home({
  artworks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Box as="main" flexGrow="1" marginTop={4} marginBottom={6}>
      <Head>
        <title>Gabriel Lippmann | Catalogue Raisonnée</title>
      </Head>
      <Grid>
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </Grid>
    </Box>
  );
}
