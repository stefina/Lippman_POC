import SparqlClient from 'sparql-http-client';

import { getObjectValue } from './getObjectValue';
import { getValue } from './getValue';
import { prefixes } from './getPrefixes';

// TODO: this does not return orientation
export async function getOrientation(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const orientationStream = await client.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
        <${link}> rdfs:label ?obj .
    }
  `);
  const orientation = await getValue(orientationStream);
  const orientationValue = await getObjectValue(orientation);

  return orientationValue;
}
