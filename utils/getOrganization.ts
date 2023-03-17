import { getValueFromResultRows } from './getValueFromResultRows';
import { wikidataClient } from './wikidataClient';
import { lippmannClient } from './lippmannClient';
import { getOrganizationID } from './getOrganizationID';
import { getLabelValueFromResult } from './getLabelValueFromResult';

export async function getOrganizationURL(link: string) {
  const organizationStream = await lippmannClient.query.select(`
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
  return getValueFromResultRows(organizationStream);
}

export async function getWikiDataOrganizationURL(link: string) {
  const organizationURL = await getOrganizationURL(link);
  const organizationID = await getOrganizationID(organizationURL);

  return 'https://www.wikidata.org/wiki/' + organizationID;
}

export async function getOrganizationName(link: string) {
  const organizationURL = await getOrganizationURL(link);
  const id = await getOrganizationID(organizationURL);
  const organizationNameStream = await wikidataClient.query.select(`
    PREFIX p: <http://www.wikidata.org/prop/>
    PREFIX ps: <http://www.wikidata.org/prop/statement/>
    PREFIX pq: <http://www.wikidata.org/prop/qualifier/>
    PREFIX wd: <http://www.wikidata.org/entity/>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    SELECT DISTINCT * WHERE {
      wd:${id} rdfs:label ?label . 
      FILTER (LANG(?label) = "en")
    }
  `);
  return getLabelValueFromResult(organizationNameStream);
}
