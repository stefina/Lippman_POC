import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getTitleConstructed(link: string) {
  const titleConstructedStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}/Title/constructed> rdfs:label ?obj .
    }
  `);

  return getValueFromResultRows(titleConstructedStream);
}
