import { getValueFromResultRows } from './getValueFromResultRows';
import { wikidataClient } from './wikidataClient';
import { lippmannClient } from './lippmannClient';
import { getOrganizationID } from './getOrganizationID';
import { getLabelValueFromResult } from './getLabelValueFromResult';
import { prefixes } from './getPrefixes';

export async function getOrganizationURL(link: string) {
  const organizationStream = await lippmannClient.query.select(`
    ${prefixes}

    SELECT DISTINCT ?obj WHERE {
        <${link}> cidoc:P52_has_current_owner ?obj .
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
    ${prefixes}
    
    SELECT DISTINCT * WHERE {
      wd:${id} rdfs:label ?label . 
      FILTER (LANG(?label) = "en")
    }
  `);
  return getLabelValueFromResult(organizationNameStream);
}
