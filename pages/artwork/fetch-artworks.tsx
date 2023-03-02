import Head from 'next/head';
import { Artwork, ArtworkCard } from '../../components/ArtworkCard';
import testPicture from './../lippmann-default.jpg';
import rdf from 'rdf-ext';
import { Box } from '../../components/Box';
import { Grid } from '../../components/Grid';
import SparqlClient from 'sparql-http-client';
import QuadExt from 'rdf-ext/lib/Quad';
import testPicture0 from '../lippmann.jpg';
import testPicture1 from '../lippmann2.jpg';
import testPicture2 from '../lippmann3.jpg';
import testPicture3 from '../lippmann4.jpg';
import testPicture4 from '../lippmann5.jpg';
import testPicture5 from '../lippmann6.jpg';
import testPicture6 from '../lippmann7.jpg';
import testPicture7 from '../lippmann8.jpg';

interface GetStaticPropsType {
  artworks: Artwork[];
}

async function getLabel(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const labelStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}> rdfs:label ?obj .
                }
                }
            }
            `);
  const label = await getValue(labelStream);
  const labelValue = await getObjectValue(label);

  return labelValue;
}

async function getTitle(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const titleStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}/Title/original> rdfs:label ?obj .
                }
                }
            }
            `);
  const title = await getValue(titleStream);
  const titleValue = await getObjectValue(title);

  return titleValue;
}

async function getOrientation(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const orientationStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}> rdfs:label ?obj .
                }
                }
            }
            `);
  const orientation = await getValue(orientationStream);
  const orientationValue = await getObjectValue(orientation);

  return orientationValue;
}

async function getHasCurrentOwner(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const hasCurrentOwnerStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}> <http://www.cidoc-crm.org/cidoc-crm/P52_has_current_owner> ?obj .
                }
                }
            }
            `);
  const hasCurrentOwner = await getValue(hasCurrentOwnerStream);
  const hasCurrentOwnerValue = await getObjectValue(hasCurrentOwner);

  const ownerStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${hasCurrentOwnerValue}> rdfs:label ?obj .
                }
                }
            }
            `);
  const owner = await getValue(ownerStream);
  const ownerValue = await getObjectValue(owner);

  return ownerValue;
}

function getObjectValue(dataset: any) {
  // A dataset looks like this:
  // Map(1) {
  //   '1:1:1:' => {
  //     obj: Literal {
  //       value: 'Plaque Lippmann: Mont Cervin',
  //       datatype: [NamedNode],
  //       language: ''
  //     }
  //   }
  // }
  if (
    dataset._quads.entries().next().value &&
    dataset._quads.entries().next().value.length
  ) {
    return dataset._quads.entries().next().value[1].obj.value;
  }
  return 'undefined';
}

async function getValue(stream: any) {
  const dataset = rdf.dataset();
  const value = await dataset.import(stream);
  return value;
}

async function getAccessionNumber(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const accessionNumberStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}/AccessionNumber> rdfs:label ?obj .
                }
                }
            }
            `);
  const accessionNumber = await getValue(accessionNumberStream);
  const accessionNumberValue = await getObjectValue(accessionNumber);

  return accessionNumberValue;
}

async function Artworks({
  endpointUrl = 'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
}) {}

export async function getStaticProps(): Promise<{ props: GetStaticPropsType }> {
  var artworkregex = /^https:\/\/pe\.plateforme10\.ch\/Artwork\/\d{5}\/\d{9}$/;
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });

  const stream = await client.query.select(`
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

  const dataset = rdf.dataset();
  await dataset.import(stream);

  // let artworks: Artwork[] = [];
  const artworks = await Promise.all(dataset.toArray().map(mapArtwork));

  async function mapArtwork(quad: QuadExt): Promise<Artwork | undefined> {
    const subject = quad.subject.value.toString();
    if (subject.match(artworkregex)) {
      return {
        id: `${quad.subject.value}`,
        title: await getTitle(subject),
        author: `${quad.subject.value}`,
        owner: await getHasCurrentOwner(subject),
        year: await getAccessionNumber(subject),
        image: testPicture,
      };
    }
  }

  return {
    props: {
      artworks: artworks.filter(Boolean) as Artwork[],
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
