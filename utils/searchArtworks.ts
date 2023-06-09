import { lippmannClient } from './lippmannClient';
import { isTruthy } from './isTruthy';
import { mapArtwork } from './mapArtwork';
import { prefixes } from './getPrefixes';

export async function searchArtworks(term: string) {
  const dataset = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT * {
    ?art cidoc:P52_has_current_owner ?hasCurrentOwner .
    ?hasCurrentOwner rdfs:label ?ownerValue .
    ?art rdfs:label ?labelValue .
  	FILTER (regex(?ownerValue, "${term}", "i") || regex(?labelValue, "${term}", "i"))	
}
 `);

  const artworksOrUndef = await Promise.all(dataset.map(mapArtwork));
  const artworks = artworksOrUndef.filter(isTruthy);

  return artworks;
}
