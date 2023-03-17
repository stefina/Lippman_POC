import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { useContext, useEffect } from 'react';
import { Artwork } from '../../components/ArtworkCard';
import { ArtworkDetail } from '../../components/ArtworkDetail';
import { ArtworkList } from '../../components/ArtworkList';
import { Box } from '../../components/Box';
import { Grid } from '../../components/Grid';
import { getArtworks } from '../../utils/getArtworks';
import { ActionType, AppContext } from '../_app';

interface ArtworkDetailPageProps {
  artworks: Artwork[];
  currentArtwork?: Artwork;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const artworks = await getArtworks();

  return {
    paths: artworks.map((artwork) => ({ params: { id: artwork.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArtworkDetailPageProps> = async ({
  params,
}) => {
  const artworks = await getArtworks();
  const currentArtwork = artworks.find((artwork) =>
    params ? artwork.id === params.id : false
  );

  return {
    props: {
      artworks,
      currentArtwork,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box as="main" flexGrow="1">
      <Head>
        <title>
          {currentArtwork && currentArtwork.title} | Gabriel Lippmann |
          Catalogue Raisonnée
        </title>
      </Head>
      <Grid marginTop={4} marginBottom={6} variant="small">
        <ArtworkList defaultArtworks={artworks} />
      </Grid>
      {currentArtwork && <ArtworkDetail artwork={currentArtwork} />}
    </Box>
  );
}
