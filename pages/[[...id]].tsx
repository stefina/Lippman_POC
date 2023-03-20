import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Artwork } from '../components/ArtworkCard';
import { ArtworkDetail } from '../components/ArtworkDetail';
import { ArtworkList } from '../components/ArtworkList';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import { getArtworks } from '../utils/getArtworks';
import { ActionType, AppContext } from './_app';

interface ArtworkDetailPageProps {
  artworks: Artwork[];
  currentArtwork?: Artwork | null;
}

export const getStaticPaths: GetStaticPaths<{
  id: string[];
}> = async () => {
  const artworks = await getArtworks();

  const paths = [
    { params: { id: [] } },
    ...artworks.map((artwork) => ({ params: { id: [artwork.id] } })),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArtworkDetailPageProps> = async ({
  params,
}) => {
  const artworks = await getArtworks();

  const currentArtwork =
    params && params.id && params.id.length > 0
      ? artworks.find((artwork) => artwork.id === (params.id as string[])[0])
      : null;

  return {
    props: {
      artworks,
      currentArtwork: currentArtwork ? currentArtwork : null,
    },
  };
};

export default function ArtworkDetailPage({
  artworks,
  currentArtwork,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch &&
      currentArtwork &&
      dispatch({
        type: ActionType.SetOverlay,
        payload: {
          isOverlayOpen: true,
        },
      });

    return () => {
      dispatch &&
        dispatch({
          type: ActionType.SetOverlay,
          payload: {
            isOverlayOpen: false,
          },
        });
    };
  }, [currentArtwork, dispatch]);

  return (
    <Box as="main" flexGrow="1">
      <Head>
        <title>
          {currentArtwork?.title || 'Home'} | Gabriel Lippmann | Catalogue
          Raisonnée
        </title>
      </Head>
      <Grid marginTop={4} marginBottom={6} variant="small">
        <ArtworkList defaultArtworks={artworks} />
      </Grid>
      {currentArtwork && <ArtworkDetail artwork={currentArtwork} />}
    </Box>
  );
}
