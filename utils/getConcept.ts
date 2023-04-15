import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { prefixes } from './getPrefixes';

export async function getConcept(link: string) {
  const conceptStream = await lippmannClient.query.select(`
    ${prefixes}
    
    SELECT DISTINCT ?obj WHERE {
    VALUES ?subject {<https://pe.plateforme10.ch/Artwork/15053/000000005/Type>}
      ?subject cidoc:P2_has_type ?getty .   
      ?getty dce:identifier ?obj .
      ?getty rdf:type <http://vocab.getty.edu/ontology#Concept> .
      ?getty <http://vocab.getty.edu/ontology#displayOrder> 2
 } 
  `);

  return getValueFromResultRows(conceptStream);
}
