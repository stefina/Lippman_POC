import { lippmannClient } from './lippmannClient';
import { isTruthy } from './isTruthy';
import { mapArtwork } from './mapArtwork';

// TODO: test this!
export async function searchArtworks(term: string) {
  const dataset = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT * WHERE {
      ?subj rdfs:label ?obj .
      FILTER regex(?obj, "${term}", "i")
      FILTER regex(?subj, "^https://pe.plateforme10.ch/Artwork/[0-9]{5}/[0-9]{9}$", "")
    }
 `);

  const artworksOrUndef = await Promise.all(dataset.map(mapArtwork));
  const artworks = artworksOrUndef.filter(isTruthy);

  return artworks;
}
