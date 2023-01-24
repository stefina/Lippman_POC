import Head from 'next/head';
import Image from 'next/image';

import { Artwork, ArtworkCard } from '../components/ArtworkCard';
import CustomLink from '../components/link/Link';
import testPicture from './lippmann-default.jpg';

const artwork: Artwork = {
  author: 'Gabriel Lippmann',
  image: testPicture,
  title: 'Haus am See',
  year: '1904',
  id: 'lippmann',
};

const content = Array.from({ length: 10 }, (_, i) => ({
  ...artwork,
  id: `${artwork.id}${i}`,
}));

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gabriel Lippmann | Catalogue Raisonnée</title>
      </Head>
      <div>
        {content.map((artwork) => (
          <ArtworkCard key={artwork.id} {...artwork} />
        ))}
      </div>
      <div>
        <CustomLink label="A propos" link="/a-propos" />
      </div>
      <div>
        <CustomLink label="Gabriel Lippmann" link="/gabriel-lippmann" />
      </div>
    </div>
  );
}
