import { lippmannClient } from './lippmannClient';
import { isTruthy } from './isTruthy';
import { mapArtwork } from './mapArtwork';
import { prefixes } from './getPrefixes';

export async function getArtworks() {
  const dataset = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT * WHERE {
      ?subject cidoc:P2_has_type <http://vocab.getty.edu/aat/300133025> .
      FILTER regex(?subject, "^https://pe.plateforme10.ch/Artwork/[0-9]{5}/[0-9]{9}$", "")
    }
    `);

  const artworksOrUndef = await Promise.all(dataset.map(mapArtwork));
  const artworks = artworksOrUndef.filter(isTruthy);

  console.log('ARTWORKS', artworks);

  return artworks;
}
