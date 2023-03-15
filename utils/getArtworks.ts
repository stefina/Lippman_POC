import { lippmannClient } from './lippmannClient';
import { isTruthy } from './isTruthy';
import { mapArtwork } from './mapArtwork';

export async function getArtworks() {
  const dataset = await lippmannClient.query.select(`
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

  return artworks;
}
