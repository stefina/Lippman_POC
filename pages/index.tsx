import Head from 'next/head';

import { Artwork, ArtworkCard } from '../components/ArtworkCard';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import { CustomLink } from '../components/link/Link';
import testPicture from './lippmann-default.jpg';

const artwork: Artwork = {
  author: 'Gabriel Lippmann',
  image: testPicture,
  title: 'Haus am See',
  year: '1904',
  id: 'lippmann',
};

const mockContent = Array.from({ length: 10 }, (_, i) => ({
  ...artwork,
  id: `${artwork.id}${i}`,
}));

export default function Home() {
  return (
    <Box as="main" marginTop={4} marginBottom={6}>
      <Head>
        <title>Gabriel Lippmann | Catalogue Raisonnée</title>
      </Head>
      <Grid>
        {mockContent.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </Grid>
    </Box>
  );
}
