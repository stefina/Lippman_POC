import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getTitle(link: string) {
  const titleStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}/Title/original> rdfs:label ?obj .
    }
  `);

  return getValueFromResultRows(titleStream);
}
