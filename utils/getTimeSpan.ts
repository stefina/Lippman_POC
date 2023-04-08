import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';

export async function getTimeSpan(id: string) {
  const timeSpanStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
      ?subj <http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at> ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}}'))
    }
  `);

  return getValueFromResultRows(timeSpanStream);
}

export async function getBegin(id: string) {
  const beginStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
      ?subj <http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin> ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}'))
    }
  `);

  return getValueFromResultRows(beginStream) || '';
}

export async function getEnd(id: string) {
  const endStream = await lippmannClient.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT DISTINCT ?obj WHERE {
      ?subj <http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end> ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}'))
    }
  `);

  return getValueFromResultRows(endStream);
}
