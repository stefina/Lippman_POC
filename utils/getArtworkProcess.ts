import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { gettyClient } from './gettyClient';
import { prefixes } from './getPrefixes';

export async function getArtworkProcess(link: string) {
  const artworkProcessURL = await getArtworkProcessURL(link);
  const gettyProcessStream = await gettyClient.query.select(`
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    
    SELECT (STR(?obj) AS ?label) {
        <${artworkProcessURL}> rdfs:label ?obj .
    }
  `);
  return getValueFromResultRows(gettyProcessStream);
}

// returns http://vocab.getty.edu/aat/300133464
export async function getArtworkProcessURL(link: string) {
  const processStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}/Type> cidoc:P2_has_type ?obj .
        ?subject cidoc:P2_has_type ?obj .
        FILTER regex(?subject, "^https://pe.plateforme10.ch/Artwork/[0-9]{5}/[0-9]{9}$", "")
    } 
  `);
  return getValueFromResultRows(processStream);
}
