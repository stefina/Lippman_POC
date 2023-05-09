import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getTimeSpan(id: string) {
  const timeSpanStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
      ?subj cidoc:P7_took_place_at ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}}'))
    }
  `);

  return getValueFromResultRows(timeSpanStream);
}

export async function getBegin(id: string) {
  const beginStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
      ?subj cidoc:P82a_begin_of_the_begin ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}'))
    }
  `);

  return getValueFromResultRows(beginStream) || '';
}

export async function getEnd(id: string) {
  const endStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
      ?subj cidoc:P82b_end_of_the_end ?obj .
      FILTER (strstarts(str(?subj), 'https://pe.plateforme10.ch/Event/Production/${id}'))
    }
  `);

  return getValueFromResultRows(endStream);
}
