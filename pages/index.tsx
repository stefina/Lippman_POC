import Head from 'next/head';
import { Artwork, ArtworkCard } from '../components/ArtworkCard';
import { Box } from '../components/Box';
import { Grid } from '../components/Grid';
import testPicture from './lippmann-default.jpg';
import testPicture0 from './lippmann.jpg';
import testPicture1 from './lippmann2.jpg';
import testPicture2 from './lippmann3.jpg';
import testPicture3 from './lippmann4.jpg';
import testPicture4 from './lippmann5.jpg';
import testPicture5 from './lippmann6.jpg';
import testPicture6 from './lippmann7.jpg';
import testPicture7 from './lippmann8.jpg';

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

export default function Home() {
  return (
    <Box as="main" flexGrow="1" marginTop={4} marginBottom={6}>
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
