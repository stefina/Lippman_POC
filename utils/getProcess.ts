import { lippmannClient } from './lippmannClient';
import { getValueFromResultRows } from './getValueFromResultRows';
import { gettyClient } from './gettyClient';

export async function getProcess(link: string) {
  const processStream = await gettyClient.query.select(`
    PREFIX gvp:              <http://vocab.getty.edu/ontology#>
    PREFIX gvp_lang:         <http://vocab.getty.edu/language/>
    
    PREFIX bibo:          <http://purl.org/ontology/bibo/>
    PREFIX dct:           <http://purl.org/dc/terms/>
    PREFIX foaf:          <http://xmlns.com/foaf/0.1/>
    PREFIX schema:        <http://schema.org/>
    
    PREFIX xl:         <http://langegger.at/xlwrap/vocab#>
    PREFIX skos:          <http://www.w3.org/2004/02/skos/core#>
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

    SELECT ?label {
        BIND (${link} AS ?x)
                {$x a gvp:ObsoleteSubject; skos:prefLabel ?label}
        
          UNION {$x a gvp:Subject; xl:prefLabel [xl:literalForm ?label; dct:language gvp_lang:en]}
        
          UNION {$x a gvp:Subject; gvp:prefLabelGVP [xl:literalForm ?label]}
        
          UNION {$x a xl:Label; xl:literalForm ?label}
        
          UNION {$x a gvp:ScopeNote; rdf:value ?value.
        
                 BIND(if(strlen(?value)>50,concat(substr(?value,1,50),"..."),?value) as ?label)}
        
          UNION {$x a foaf:Agent; foaf:name ?label}
        
          UNION {$x a bibo:Document; bibo:shortTitle ?label}
        
          UNION {$x a skos:Concept; skos:prefLabel ?label}
        
          UNION {values ?type {schema:Place schema:Person schema:Organization}
        
                 $x a ?type; ^foaf:focus/gvp:prefLabelGVP/xl:literalForm ?label}
        
          UNION {$x a schema:GeoCoordinates; schema:latitude ?lat; schema:longitude ?long.
        
                 BIND(concat(?lat,",",?long) as ?label)}
        
          UNION {$x a gvp:Biography; schema:description ?label}
        
          UNION {$x a schema:Event; dct:type/gvp:prefLabelGVP/xl:literalForm ?label}
        
          UNION {$x rdfs:label ?label}

    } LIMIT 1
  `);

  return getValueFromResultRows(processStream);
}
