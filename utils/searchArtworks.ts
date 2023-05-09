import { lippmannClient } from './lippmannClient';
import { isTruthy } from './isTruthy';
import { mapArtwork } from './mapArtwork';
import { prefixes } from './getPrefixes';

export async function searchArtworks(term: string) {
  const dataset = await lippmannClient.query.select(`
    ${prefixes}
    
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
