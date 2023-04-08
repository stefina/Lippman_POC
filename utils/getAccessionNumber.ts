import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';

export async function getAccessionNumber(link: string) {
  const accessionNumberStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
        <${link}/AccessionNumber> rdfs:label ?obj .
    }
  `);

  return getValueFromResultRows(accessionNumberStream);
}
