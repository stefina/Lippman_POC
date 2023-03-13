import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import React from 'react';
import { Box } from '../Box';
import { Text } from '../Text';
import { Heading } from '../Heading';
import {
  artworkHeadingStyle,
  artworkImageStyle,
  artworkLinkStyles,
  artworkTextWrapperStyle,
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
        gap={3}
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
        <Stack
          flexDirection="column"
          gap={3}
          className={artworkTextWrapperStyle}
        >
          {title && (
            <Heading
              lineClamp={1}
              color="neutral-500"
              size="small"
              leading="narrow"
            >
              <span className={artworkHeadingStyle}>{title}</span>
            </Heading>
          )}
          <Stack flexDirection="column" gap={2} marginTop="auto">
            {year && (
              <Text size="small" leading="narrow">
                <span className={artworkHeadingStyle}>{year}</span>
              </Text>
            )}
            {owner && (
              <Text size="small" leading="narrow">
                <span className={artworkHeadingStyle}>{owner}</span>
              </Text>
            )}
          </Stack>
        </Stack>
      </Stack>
    </Link>
  );
};
