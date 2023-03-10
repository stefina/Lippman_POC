import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import {
  artworkImageStyle,
  artworkLinkStyles,
  artworkTypeIconStyle,
  artworkTypeIconWrapperStyle,
} from './ArtworkCard.css';
import { Stack } from '../Stack';
import { IconTypeArtwork } from '../Icons/IconTypeArtwork';

export interface Artwork {
  author: string;
  id: string;
  image: StaticImageData;
  title: string;
  owner: string;
  year: string;
}

export const ArtworkCard = ({
  author,
  id,
  image,
  title,
  year,
  owner,
}: Artwork) => {
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
        <Box position="relative">
          <Image
            src={image}
            alt={title}
            className={artworkImageStyle}
            priority
          />
          <Box position="absolute" className={artworkTypeIconStyle}>
            <Box className={artworkTypeIconWrapperStyle}>
              <IconTypeArtwork />
            </Box>
          </Box>
        </Box>
        <Heading size="small">{title}</Heading>
        <Text>{year}</Text>
        <Text>{owner}</Text>
      </Stack>
    </Link>
  );
};
