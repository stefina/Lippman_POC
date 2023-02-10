import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import { artworkLinkStyles } from './ArtworkCard.css';
import { Stack } from '../Stack';

export interface Artwork {
  author: string;
  id: string;
  image: StaticImageData;
  title: string;
  year: string;
}

export const ArtworkCard = ({ author, id, image, title, year }: Artwork) => {
  return (
    <Link className={artworkLinkStyles} href={`/${id}`}>
      <Stack
        as="section"
        flexDirection="column"
        gap={2}
        padding={2}
        paddingBottom={3}
        backgroundColor="white"
      >
        <Image src={image} alt={title} />
        <Heading size="small">{title}</Heading>
        <Text>{year}</Text>
        <Text>{author}</Text>
      </Stack>
    </Link>
  );
};
