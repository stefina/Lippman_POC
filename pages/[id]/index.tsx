import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import { ArtworkDetailCloseButton } from '../../components/ArtworkDetailCloseButton/ArtworkDetailCloseButton';
import { ArtworkDetailCluster } from '../../components/ArtworkDetailCluster';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Grid } from '../../components/Grid';
import { Heading } from '../../components/Heading';
import { IconArrowLeft } from '../../components/Icons/IconArrowLeft';
import { IconArrowRight } from '../../components/Icons/IconArrowRight';
import { Overlay } from '../../components/Overlay';
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

const artwork: Artwork = {
  author: 'Gabriel Lippmann',
  image: testPicture,
  title: 'Haus am See',
  year: '1904',
  id: 'lippmann',
};

const pictures = [
  testPicture0,
  testPicture1,
  testPicture2,
  testPicture3,
  testPicture4,
  testPicture5,
  testPicture6,
  testPicture7,
];

const mockContent = Array.from({ length: 8 }, (_, i) => ({
  ...artwork,
  id: `${artwork.id}${i}`,
  image: pictures[i],
  title: `${artwork.title} ${i + 1}`,
}));

const isValidKey = (x: unknown): x is string => typeof x === 'string';

function createObject<T extends object, K extends keyof T>(array: T[], key: K) {
  return array.reduce<Record<T[K] & string, T>>((accumulator, current) => {
    const valueAtKey = current[key];

    if (isValidKey(valueAtKey)) {
      accumulator[valueAtKey] = current;
    }
    return accumulator;
  }, {} as Record<T[K] & string, T>);
}

const mockContentMap: Record<keyof Artwork, Artwork> = createObject(
  mockContent,
  'id'
);

export default function ArtworkDetailPage() {
  const { query } = useRouter();
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

  const getMock = (key: keyof Artwork) =>
    mockContentMap[query.id as keyof Artwork][key];

  return (
    <Box as="main" flexGrow="1">
      <Head>
        <title>
          {query && query.id && mockContentMap[query.id as keyof Artwork].title}{' '}
          | Gabriel Lippmann | Catalogue Raisonnée
        </title>
      </Head>
      <Grid marginTop={4} marginBottom={6} variant="small">
        {mockContent.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </Grid>
      {query && query.id && (
        <Overlay boxShadow="default" position="relative" padding={8}>
          <ArtworkDetailCloseButton />
          <Heading>{mockContentMap[query.id as keyof Artwork].title}</Heading>

          <ArtworkDetailCluster>
            <Text as="dt" color="neutral-400">
              Title
            </Text>
            <Text as="dd">{getMock('title') as string}</Text>
            <Text as="dt" color="neutral-400">
              Authors
            </Text>
            <Text as="dd">{getMock('author') as string}</Text>
            <Text as="dt" color="neutral-400">
              Year
            </Text>
            <Text as="dd">{getMock('year') as string}</Text>
          </ArtworkDetailCluster>
          <Button
            asLayout="stack"
            marginTop={8}
            gap={3}
            internalHref={`${query.id}/detail`}
          >
            <Box as="span">Go to detail</Box>
            <IconArrowRight size={5} />
          </Button>
        </Overlay>
      )}
    </Box>
  );
}
