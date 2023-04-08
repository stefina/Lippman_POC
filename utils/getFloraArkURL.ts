import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';

export async function getFloraArkURL(link: string) {
  const floraArkURLStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
        <${link}> <http://www.cidoc-crm.org/cidoc-crm/P1_is_identified_by> ?obj .
        FILTER (strstarts(str(?obj), 'http://mel.decalog.net'))
    }
  `);

  return getValueFromResultRows(floraArkURLStream);
}
