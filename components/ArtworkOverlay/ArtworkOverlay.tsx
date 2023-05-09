import Image from 'next/image';
import { useRouter } from 'next/router';
import { getHrefWithPreservedQuery } from '../../utils/getHrefWithPreservedQuery';
import { Artwork } from '../ArtworkCard';
import { ArtworkDetailCloseButton } from '../ArtworkOverlayCloseButton/ArtworkOverlayCloseButton';
import { ArtworkDetailCluster } from '../ArtworkOverlayCluster';
import { Box } from '../Box';
import { Button } from '../Button';
import { Heading } from '../Heading';
import { IconArrowRight } from '../Icons/IconArrowRight';
import { Overlay } from '../Overlay';
import { Stack } from '../Stack';
import { Text } from '../Text';
import { imageStyle, imageWrapperStyle } from './ArtworkOverlay.css';

interface ArtworkOverlayProps {
  artwork: Artwork;
}

export const ArtworkOverlay = ({
  artwork: {
    id,
    title,
    titleConstructed,
    image,
    year,
    artworkURL,
    accessionNumber,
    artProcess,
    concept,
    conceptURL,
    floraArkURL,
    ownerOrgName,
    ownerOrgWikiDataURL,
  },
}: ArtworkOverlayProps) => {
  const { query } = useRouter();

  return (
    <Overlay boxShadow="default" position="relative">
      <ArtworkDetailCloseButton />
      <Heading paddingX={8} paddingTop={8} paddingBottom={4}>
        {titleConstructed ? titleConstructed : title}
      </Heading>
      {image && (
        <Stack
          justifyContent="center"
          alignItems="center"
          paddingY={4}
          paddingX={8}
          backgroundColor="neutral-100"
        >
          <Box className={imageWrapperStyle} position="relative">
            <Image src={image} alt="" className={imageStyle} fill></Image>
          </Box>
        </Stack>
      )}
      <Box paddingX={8} marginTop={4}>
        <ArtworkDetailCluster>
          {title && (
            <>
              <Text as="dt" color="neutral-400">
                Title
              </Text>
              <Text as="dd">{title}</Text>
            </>
          )}
          {titleConstructed && (
            <>
              <Text as="dt" color="neutral-400">
                Title (constructed)
              </Text>
              <Text as="dd">{titleConstructed}</Text>
            </>
          )}
          {accessionNumber && (
            <>
              <Text as="dt" color="neutral-400">
                Accession Number
              </Text>
              <Text as="dd">{accessionNumber}</Text>
            </>
          )}
          {artProcess && (
            <>
              <Text as="dt" color="neutral-400">
                Process
              </Text>
              <Text as="dd">{artProcess}</Text>
            </>
          )}
          {concept && conceptURL && (
            <>
              <Text as="dt" color="neutral-400">
                Concept
              </Text>
              <Text as="dd">
                <a href={conceptURL} rel="noreferrer">
                  {concept}
                </a>
              </Text>
            </>
          )}
          {year && (
            <>
              <Text as="dt" color="neutral-400">
                Year
              </Text>
              <Text as="dd">{year}</Text>
            </>
          )}
          {artworkURL && (
            <>
              <Text as="dt" color="neutral-400">
                Artwork URL
              </Text>
              <Text as="dd">
                <a href={artworkURL}>{artworkURL}</a>
              </Text>
            </>
          )}
          {floraArkURL && (
            <>
              <Text as="dt" color="neutral-400">
                Flora Ark URL
              </Text>
              <Text as="dd">
                <a href={floraArkURL}>{floraArkURL}</a>
              </Text>
            </>
          )}
          {ownerOrgName && ownerOrgWikiDataURL && (
            <>
              <Text as="dt" color="neutral-400">
                Owner
              </Text>
              <Text as="dd">
                <a href={ownerOrgWikiDataURL}>{ownerOrgName}</a>
              </Text>
            </>
          )}
        </ArtworkDetailCluster>
        <Button
          asLayout="stack"
          marginTop={6}
          gap={3}
          internalHref={getHrefWithPreservedQuery(`${id}/detail`, query)}
        >
          <Box as="span">Go to detail</Box>
          <IconArrowRight size={5} />
        </Button>
      </Box>
    </Overlay>
  );
};
