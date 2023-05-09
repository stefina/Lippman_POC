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
import { useRouter } from 'next/router';
import { getHrefWithPreservedQuery } from '../../utils/getHrefWithPreservedQuery';

export interface Artwork {
  artworkURL: string;
  id: string;
  image: StaticImageData | null;
  title: string;
  titleConstructed: string;
  owner: string;
  year: string;
  artProcess: string;
  floraArkURL: string;
  ownerOrgURL: string;
  ownerOrgName: string;
  ownerOrgWikiDataURL: string;
  accessionNumber: string;
  tookPlaceAt: string;
  wasProducedBy: string;
  carriedOutBy: string;
  concept: string;
  conceptURL: string;
}

export const ArtworkCard = ({
  id,
  image,
  title,
  titleConstructed,
  year,
  owner,
}: Artwork) => {
  const { query } = useRouter();

  return (
    <Link
      className={artworkLinkStyles}
      href={getHrefWithPreservedQuery(`/${id}`, query)}
    >
      <Stack
        as="section"
        flexDirection="column"
        gap={3}
        padding={2}
        paddingBottom={3}
        backgroundColor="white"
      >
        <Box position="relative">
          {image ? (
            <Image
              src={image}
              alt={title}
              className={artworkImageStyle}
              priority
            />
          ) : (
            <Box className={artworkImageStyle} />
          )}
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
          {(title || titleConstructed) && (
            <Heading color="neutral-500" size="small" leading="narrow">
              <span className={artworkHeadingStyle}>
                {titleConstructed ? titleConstructed : title}
              </span>
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
