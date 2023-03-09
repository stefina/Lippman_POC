import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import { ArtworkDetailCloseButton } from '../../components/ArtworkDetailCloseButton/ArtworkDetailCloseButton';
import { ArtworkDetailCluster } from '../../components/ArtworkDetailCluster';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Grid } from '../../components/Grid';
import { Heading } from '../../components/Heading';
import { IconArrowRight } from '../../components/Icons/IconArrowRight';
import { Overlay } from '../../components/Overlay';
import { Stack } from '../../components/Stack';
import { Text } from '../../components/Text';

import testPicture from '../lippmann-default.jpg';
import testPicture0 from '../lippmann.jpg';
import testPicture1 from '../lippmann2.jpg';
import testPicture2 from '../lippmann3.jpg';
import testPicture3 from '../lippmann4.jpg';
import testPicture4 from '../lippmann5.jpg';
import testPicture5 from '../lippmann6.jpg';
import testPicture6 from '../lippmann7.jpg';
import testPicture7 from '../lippmann8.jpg';
import { ActionType, AppContext } from '../_app';
import {
  imageStyle,
  imageWrapperStyle,
} from '../../components/ArtworkDetail/ArtworkDetail.css';
import { ArtworkDetail } from '../../components/ArtworkDetail';
import { client } from '../../utils/client';
import { isTruthy } from '../../utils/isTruthy';
import { mapArtwork } from '../../utils/mapArtwork';
import { GetStaticPaths, GetStaticProps } from 'next';
import { getArtworks } from '../../utils/getArtworks';

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

export const getStaticProps: GetStaticProps = async ({
  params,
}): Promise<{
  props: ArtworkDetailPageProps;
}> => {
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
}: ArtworkDetailPageProps) {
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
        {artworks.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </Grid>
      {currentArtwork && <ArtworkDetail artwork={currentArtwork} />}
    </Box>
  );
}
