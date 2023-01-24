import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface Artwork {
  author: string;
  id: string;
  image: StaticImageData;
  title: string;
  year: string;
}

export const ArtworkCard = ({ author, id, image, title, year }: Artwork) => {
  return (
    <Link href={`/${id}`}>
      <section>
        <Image src={image} alt={title} />
        <h2>{title}</h2>
        <p>{year}</p>
        <p>{author}</p>
      </section>
    </Link>
  );
};
