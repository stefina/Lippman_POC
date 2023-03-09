import Head from 'next/head';
import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import { Box } from '../../components/Box';
import { Grid } from '../../components/Grid';
import { client } from '../../utils/client';
import { getArtworks } from '../../utils/getArtworks';
import { isTruthy } from '../../utils/isTruthy';
import { mapArtwork } from '../../utils/mapArtwork';

interface GetStaticPropsType {
  artworks: Artwork[];
}

export async function getStaticProps(): Promise<{ props: GetStaticPropsType }> {
  const artworks = await getArtworks();

  return {
    props: {
      artworks,
    },
  };
}

export default function ArtworksPage({ artworks }: GetStaticPropsType) {
  return (
    <>
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
    </>
  );
}
