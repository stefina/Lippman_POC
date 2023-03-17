import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { gettyClient } from './gettyClient';

export async function getArtProcess(link: string) {
  const artworkProcessURL = await getArtworkProcessURL(link);
  console.log(artworkProcessURL);
  const gettyProcessStream = await gettyClient.query.select(`
    PREFIX gvp:  <http://vocab.getty.edu/ontology#>
    PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT ?label {
      BIND (<${artworkProcessURL}> AS ?x)
            {$x a gvp:ObsoleteSubject; skos:prefLabel ?label}
    
      UNION {$x rdfs:label ?label}
      FILTER (LANG(?label) = "en")   
    } limit 1
  `);
  console.log(getValueFromResultRows(gettyProcessStream)); // TODO: returns empty string
  return getValueFromResultRows(gettyProcessStream);
}

// returns http://vocab.getty.edu/aat/300133464
export async function getArtworkProcessURL(link: string) {
  const processStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    
    SELECT DISTINCT ?obj WHERE {
      SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
        GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
          <https://pe.plateforme10.ch/Artwork/15053/000000002/Type> <http://www.cidoc-crm.org/cidoc-crm/P2_has_type> ?obj .
    
        }
      }
    } LIMIT 1
  `);
  return getValueFromResultRows(processStream);
}
