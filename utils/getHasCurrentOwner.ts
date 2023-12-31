import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getHasCurrentOwner(link: string) {
  const ownerStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P52_has_current_owner ?hasCurrentOwner .
  		?hasCurrentOwner rdfs:label ?obj .
    }
  `);
  const ownerValue = getValueFromResultRows(ownerStream);

  return ownerValue;
}
