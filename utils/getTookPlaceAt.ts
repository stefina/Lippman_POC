import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getTookPlaceAt(link: string) {
  const tookPlaceAtStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P108i_was_produced_by ?event .
        ?event cidoc:P7_took_place_at ?obj
    }
  `);

  return getValueFromResultRows(tookPlaceAtStream);
}
