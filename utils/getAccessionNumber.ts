import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getAccessionNumber(link: string) {
  const accessionNumberStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}/AccessionNumber> rdfs:label ?obj .
    }
  `);

  return getValueFromResultRows(accessionNumberStream);
}
