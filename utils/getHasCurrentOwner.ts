import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';

export async function getHasCurrentOwner(link: string) {
  const ownerStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
        <https://pe.plateforme10.ch/Artwork/15053/000000005> <http://www.cidoc-crm.org/cidoc-crm/P52_has_current_owner> ?hasCurrentOwner .
  		?hasCurrentOwner rdfs:label ?obj .
    }
  `);
  const ownerValue = getValueFromResultRows(ownerStream);

  return ownerValue;
}
