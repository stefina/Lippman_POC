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

export const ArtworkDetail = ({ artwork }: { artwork: Artwork }) => {
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
            Authors
          </Text>
          <Text as="dd">{artwork.author}</Text>
          <Text as="dt" color="neutral-400">
            Year
          </Text>
          <Text as="dd">{artwork.year}</Text>
        </ArtworkDetailCluster>
        <Button
          asLayout="stack"
          marginTop={6}
          gap={3}
          internalHref={`${artwork.id}/detail`}
        >
          <Box as="span">Go to detail</Box>
          <IconArrowRight size={5} />
        </Button>
      </Box>
    </Overlay>
  );
};
