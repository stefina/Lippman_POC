import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';

export async function getHasCurrentOwner(link: string) {
  const hasCurrentOwnerStream = await lippmannClient.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${link}> <http://www.cidoc-crm.org/cidoc-crm/P52_has_current_owner> ?obj .
                }
                }
            }
            `);

  const hasCurrentOwnerValue = getValueFromResultRows(hasCurrentOwnerStream);

  const ownerStream = await lippmannClient.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT DISTINCT ?obj WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${hasCurrentOwnerValue}> rdfs:label ?obj .
                }
                }
            }
            `);
  const ownerValue = getValueFromResultRows(ownerStream);

  return ownerValue;
}
