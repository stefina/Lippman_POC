import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { gettyClient } from './gettyClient';
import { prefixes } from './getPrefixes';

export async function getArtProcess(link: string) {
  const artworkProcessURL = await getArtworkProcessURL(link);
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
  return getValueFromResultRows(gettyProcessStream);
}

// returns http://vocab.getty.edu/aat/300133464
export async function getArtworkProcessURL(link: string) {
  const processStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <https://pe.plateforme10.ch/Artwork/15053/000000002/Type> cidoc:P2_has_type ?obj .
    } LIMIT 1
  `);
  return getValueFromResultRows(processStream);
}
