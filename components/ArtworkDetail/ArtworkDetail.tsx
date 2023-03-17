import React from 'react';
import { Artwork } from '../ArtworkCard';
import { ArtworkDetailCloseButton } from '../ArtworkDetailCloseButton/ArtworkDetailCloseButton';
import { ArtworkDetailCluster } from '../ArtworkDetailCluster';
import { Box } from '../Box';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { IconArrowRight } from '../Icons/IconArrowRight';
import { Overlay } from '../Overlay';
import { Stack } from '../Stack';
import { imageWrapperStyle, imageStyle } from './ArtworkDetail.css';
import { Text } from '../../components/Text';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const ArtworkDetail = ({ artwork }: { artwork: Artwork }) => {
  const { query } = useRouter();

  return (
    <Overlay boxShadow="default" position="relative">
      <ArtworkDetailCloseButton />
      <Heading paddingX={8} paddingTop={8} paddingBottom={4}>
        {artwork.title}
      </Heading>
      <Stack
        justifyContent="center"
        alignItems="center"
        paddingY={4}
        paddingX={8}
        backgroundColor="neutral-100"
      >
        <Box className={imageWrapperStyle} position="relative">
          <Image src={artwork.image} alt="" className={imageStyle} fill></Image>
        </Box>
      </Stack>
      <Box paddingX={8} marginTop={4}>
        <ArtworkDetailCluster>
          <Text as="dt" color="neutral-400">
            Title
          </Text>
          <Text as="dd">{artwork.title}</Text>
          <Text as="dt" color="neutral-400">
            Accession Number
          </Text>
          <Text as="dd">{artwork.accessionNumber}</Text>
          <Text as="dt" color="neutral-400">
            Process
          </Text>
          <Text as="dd">{artwork.artProcess}</Text>
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
          internalHref={{
            pathname: `${artwork.id}/detail`,
            query: { search: query.search },
          }}
        >
          <Box as="span">Go to detail</Box>
          <IconArrowRight size={5} />
        </Button>
      </Box>
    </Overlay>
  );
};
