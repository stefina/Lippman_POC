import Head from 'next/head';
import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import { Box } from '../../components/Box';
import { Grid } from '../../components/Grid';
import { client } from '../../utils/client';
import { isTruthy } from '../../utils/isTruthy';
import { mapArtwork } from '../../utils/mapArtwork';

interface GetStaticPropsType {
  artworks: Artwork[];
}

export async function getStaticProps(): Promise<{ props: GetStaticPropsType }> {
  const dataset = await client.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT * WHERE {
        SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
        GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
            ?subject ?predicate <http://www.cidoc-crm.org/cidoc-crm/E22_Human-Made_Object> .
        }
        }
    }
    `);

  const artworksOrUndef = await Promise.all(dataset.map(mapArtwork));
  const artworks = artworksOrUndef.filter(isTruthy);

  return {
    props: {
      artworks,
    },
  };
}

export default function ArtworksPage({ artworks }: GetStaticPropsType) {
  return (
    <>
      <Box as="main" flexGrow="1" marginTop={4} marginBottom={6}>
        <Head>
          <title>Gabriel Lippmann | Catalogue Raisonnée</title>
        </Head>
        <Grid>
          {artworks.map((artwork) => (
            <ArtworkCard key={artwork.id} {...artwork} />
          ))}
        </Grid>
      </Box>
    </>
  );
}
