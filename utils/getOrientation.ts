import SparqlClient from 'sparql-http-client';

import { getObjectValue } from './getObjectValue';
import { getValue } from './getValue';

// TODO: this does not return orientation
export async function getOrientation(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const orientationStream = await client.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
        <${link}> rdfs:label ?obj .
    }
  `);
  const orientation = await getValue(orientationStream);
  const orientationValue = await getObjectValue(orientation);

  return orientationValue;
}
