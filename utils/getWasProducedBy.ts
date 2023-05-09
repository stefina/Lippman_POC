import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getWasProducedBy(link: string) {
  const wasProducedByStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P108i_was_produced_by ?obj .
    }
  `);

  return getValueFromResultRows(wasProducedByStream);
}
