import Image from 'next/image';
import { Artwork } from '../../components/ArtworkCard';
import { ContentWrapper } from '../../components/ContentWrapper';
import { getArtworks } from '../../utils/getArtworks';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { Heading } from '../../components/Heading';
import { Text } from '../../components/Text';
import { ArtworkDetailCluster } from '../../components/ArtworkDetailCluster';
import { Box } from '../../components/Box';
import { Stack } from '../../components/Stack';
import {
  detailImageStyle,
  detailImageWrapperStyle,
  detailWrapperStyles,
} from '../../styles/detail.css';
import { useRouter } from 'next/router';
import { CustomLink } from '../../components/link/Link';
import { IconChevronRight } from '../../components/Icons/IconChevronRight';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { BreadcrumbsLink } from '../../components/BreadcrumbsLink';
import { Clickable } from '../../components/Clickable';
import { NavLink } from '../../components/NavLink';

interface ArtworkDetailPageProps {
  artwork?: Artwork;
}

export const getStaticPaths: GetStaticPaths<{
  id: string;
}> = async () => {
  const artworks = await getArtworks();

  return {
    paths: artworks.map((artwork) => ({ params: { id: artwork.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<ArtworkDetailPageProps> = async ({
  params,
}) => {
  const artworks = await getArtworks();
  const artwork = artworks.find((artwork) =>
    params ? artwork.id === params.id : false
  );

  return {
    props: {
      artwork,
    },
  };
};

export default function ArtworkDetailPage({
  artwork,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const {
    query: { search },
  } = useRouter();

  if (!artwork) {
    return (
      <ContentWrapper>
        <Text>
          You are looking for an artwork that does not exist. Please retry.
        </Text>
      </ContentWrapper>
    );
  }
  const {
    title,
    year,
    artworkURL,
    artProcess,
    accessionNumber,
    carriedOutBy,
    floraArkURL,
    ownerOrgWikiDataURL,
    ownerOrgName,
    tookPlaceAt,
    wasProducedBy,
    image,
  } = artwork;
  return (
    <Stack flexDirection="column" alignItems="flex-start" paddingTop={8}>
      <Breadcrumbs>
        <BreadcrumbsLink first>
          <NavLink internalHref="/">Home</NavLink>
        </BreadcrumbsLink>
        {search && (
          <BreadcrumbsLink>
            <NavLink internalHref={{ pathname: '/', query: { search } }}>
              Search: &quot;{search}&quot;
            </NavLink>
          </BreadcrumbsLink>
        )}
      </Breadcrumbs>
      <Stack className={detailWrapperStyles} gap={8} flexWrap="wrap">
        {image && (
          <Stack
            justifyContent="center"
            alignItems="center"
            paddingY={4}
            paddingX={8}
            backgroundColor="neutral-100"
          >
            <Box className={detailImageWrapperStyle} position="relative">
              <Image
                src={image}
                alt=""
                className={detailImageStyle}
                fill
              ></Image>
            </Box>
          </Stack>
        )}
        <Box>
          {title && <Heading>{title}</Heading>}
          <Box marginTop={8}>
            <ArtworkDetailCluster>
              {title && (
                <>
                  <Text as="dt" color="neutral-400">
                    Title
                  </Text>
                  <Text as="dd">{title}</Text>
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
                    Art Process
                  </Text>
                  <Text as="dd">{artProcess}</Text>
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
              {tookPlaceAt && (
                <>
                  <Text as="dt" color="neutral-400">
                    P7_took_place_at
                  </Text>
                  <Text as="dd">{tookPlaceAt}</Text>
                </>
              )}
              {wasProducedBy && (
                <>
                  <Text as="dt" color="neutral-400">
                    P108i_was_produced_by
                  </Text>
                  <Text as="dd">{wasProducedBy}</Text>
                </>
              )}
              {carriedOutBy && (
                <>
                  <Text as="dt" color="neutral-400">
                    P14_carried_out_by
                  </Text>
                  <Text as="dd">{carriedOutBy}</Text>
                </>
              )}
              {artworkURL && (
                <>
                  <Text as="dt" color="neutral-400">
                    Artwork URL
                  </Text>
                  <Text as="dd">{artworkURL}</Text>
                </>
              )}
              {floraArkURL && (
                <>
                  <Text as="dt" color="neutral-400">
                    Flora Ark URL
                  </Text>
                  <Text as="dd">{floraArkURL}</Text>
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
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
}
