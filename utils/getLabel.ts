import { getObjectValue } from './getObjectValue';
import { getValue } from './getValue';
import SparqlClient from 'sparql-http-client';

export async function getLabel(link: string) {
  const client = new SparqlClient({
    endpointUrl:
      'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
  });
  const labelStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}> rdfs:label ?obj .
                }
                }
            }
            `);
  const label = await getValue(labelStream);
  const labelValue = await getObjectValue(label);

  return labelValue;
}
