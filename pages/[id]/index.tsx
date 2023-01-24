import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import { Box } from '../../components/Box';
import { Grid } from '../../components/Grid';
import { Overlay } from '../../components/Overlay';

import testPicture from '../lippmann-default.jpg';

const artwork: Artwork = {
  author: 'Gabriel Lippmann',
  image: testPicture,
  title: 'Haus am See',
  year: '1904',
  id: 'lippmann',
};

export const mockContent = Array.from({ length: 10 }, (_, i) => ({
  ...artwork,
  id: `${artwork.id}${i}`,
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

  const mockContent = Array.from({ length: 10 }, (_, i) => ({
    ...artwork,
    id: `${artwork.id}${i}`,
  })).filter((artwork) => artwork.id !== query.id);

  return (
    <Box as="main">
      <Head>
        <title>
          {query && query.id && mockContentMap[query.id as keyof Artwork].title}{' '}
          | Gabriel Lippmann | Catalogue Raisonnée
        </title>
      </Head>
      <Grid
        backgroundColor="white"
        boxShadow="default"
        padding={4}
        marginTop={4}
        marginBottom={6}
        hasOverlay
      >
        {mockContent.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </Grid>
      {query && query.id && (
        <Overlay boxShadow="default">
          <p>{mockContentMap[query.id as keyof Artwork].id}</p>
          <Link href={`${query.id}/detail`}>Go to detail</Link>
        </Overlay>
      )}
    </Box>
  );
}
