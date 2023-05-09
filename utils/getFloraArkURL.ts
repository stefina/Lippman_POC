import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getFloraArkURL(link: string) {
  const floraArkURLStream = await lippmannClient.query.select(`
    ${prefixes}

    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P1_is_identified_by ?obj .
        FILTER (strstarts(str(?obj), 'http://mel.decalog.net'))
    }
  `);

  return getValueFromResultRows(floraArkURLStream);
}
