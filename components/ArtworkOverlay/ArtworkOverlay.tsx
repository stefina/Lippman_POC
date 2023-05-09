import React from 'react';
import { Artwork } from '../ArtworkCard';
import { ArtworkDetailCloseButton } from '../ArtworkOverlayCloseButton/ArtworkOverlayCloseButton';
import { ArtworkDetailCluster } from '../ArtworkOverlayCluster';
import { Box } from '../Box';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { IconArrowRight } from '../Icons/IconArrowRight';
import { Overlay } from '../Overlay';
import { Stack } from '../Stack';
import { imageWrapperStyle, imageStyle } from './ArtworkOverlay.css';
import { Text } from '../Text';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { getHrefWithPreservedQuery } from '../../utils/getHrefWithPreservedQuery';

interface ArtworkOverlayProps {
  artwork: Artwork;
}

export const ArtworkOverlay = ({ artwork }: ArtworkOverlayProps) => {
  const { query } = useRouter();

  return (
    <Overlay boxShadow="default" position="relative">
      <ArtworkDetailCloseButton />
      <Heading paddingX={8} paddingTop={8} paddingBottom={4}>
        {artwork.titleConstructed ? artwork.titleConstructed : artwork.title}
      </Heading>
      {artwork.image && (
        <Stack
          justifyContent="center"
          alignItems="center"
          paddingY={4}
          paddingX={8}
          backgroundColor="neutral-100"
        >
          <Box className={imageWrapperStyle} position="relative">
            <Image
              src={artwork.image}
              alt=""
              className={imageStyle}
              fill
            ></Image>
          </Box>
        </Stack>
      )}
      <Box paddingX={8} marginTop={4}>
        <ArtworkDetailCluster>
          <Text as="dt" color="neutral-400">
            Title
          </Text>
          <Text as="dd">{artwork.title}</Text>
          <Text as="dt" color="neutral-400">
            Title (constructed)
          </Text>
          <Text as="dd">{artwork.titleConstructed}</Text>
          <Text as="dt" color="neutral-400">
            Accession Number
          </Text>
          <Text as="dd">{artwork.accessionNumber}</Text>
          <Text as="dt" color="neutral-400">
            Process
          </Text>
          <Text as="dd">{artwork.artProcess}</Text>
          <Text as="dt" color="neutral-400">
            Concept
          </Text>
          <Text as="dd">
            <a href={artwork.conceptURL}>{artwork.concept}</a>
          </Text>
          <Text as="dt" color="neutral-400">
            Year
          </Text>
          <Text as="dd">{artwork.year}</Text>
          <Text as="dt" color="neutral-400">
            Artwork URL
          </Text>
          <Text as="dd">
            <a href={artwork.artworkURL}>{artwork.artworkURL}</a>
          </Text>
          <Text as="dt" color="neutral-400">
            Flora Ark URL
          </Text>
          <Text as="dd">
            <a href={artwork.floraArkURL}>{artwork.floraArkURL}</a>
          </Text>
          <Text as="dt" color="neutral-400">
            Owner
          </Text>
          <Text as="dd">
            <a href={artwork.ownerOrgWikiDataURL}>{artwork.ownerOrgName}</a>
          </Text>
        </ArtworkDetailCluster>
        <Button
          asLayout="stack"
          marginTop={6}
          gap={3}
          internalHref={getHrefWithPreservedQuery(
            `${artwork.id}/detail`,
            query
          )}
        >
          <Box as="span">Go to detail</Box>
          <IconArrowRight size={5} />
        </Button>
      </Box>
    </Overlay>
  );
};