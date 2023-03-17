import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Artwork } from '../components/ArtworkCard';
import { ArtworkList } from '../components/ArtworkList';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import { getArtworks } from '../utils/getArtworks';
import { searchArtworks } from '../utils/searchArtworks';

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
        <ArtworkList defaultArtworks={artworks} />
      </Grid>
    </Box>
  );
}
