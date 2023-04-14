import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getCarriedOutBy(link: string) {
  const carriedOutByStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P108i_was_produced_by ?event .
        ?event cidoc:P14_carried_out_by ?obj .
    }
  `);

  return getValueFromResultRows(carriedOutByStream);
}
