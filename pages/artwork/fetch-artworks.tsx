import Link from 'next/link'
import rdf from 'rdf-ext'
import type { InferGetStaticPropsType } from 'next'
import type { Artwork } from '../../interfaces/artwork'

interface GetStaticPropsType {
    artworks: Artwork[]
}

export async function getStaticProps(): Promise<{ props: GetStaticPropsType }> {

    var artworkregex = /^https:\/\/pe\.plateforme10\.ch\/Artwork\/\d{5}\/\d{9}$/;
    const SparqlClient = require('sparql-http-client')
    const client = new SparqlClient({ endpointUrl: 'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql' })
    
    const stream = await client.query.select(`
    PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
    PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
    SELECT * WHERE {
        SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
        GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
            ?subject ?predicate ?object .
        }
        }
    } LIMIT 600
    `)

    const dataset = rdf.dataset()
    await dataset.import(stream)
    var data = ''
    let subjectArray: Array<String> = []
    let objectArray: Array<String> = []
    let artworks: Artwork[] = []

    for (const quad of dataset) {
        var subject = quad.subject.value.toString()
        if(subject.match(artworkregex)){
            subjectArray.push(`${quad.subject.value}`)

            objectArray.push(`${quad.object.value}`)

            artworks.push({
                id: `${quad.subject.value}`,
                subject: `${quad.subject.value}`,
                predicate: `${quad.predicate.value}`,
                object: `${quad.object.value}`
            })
            const labelStream = await client.query.select(`
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
            PREFIX xsd:  <http://www.w3.org/2001/XMLSchema#>
            PREFIX fn: <http://www.w3.org/2005/xpath-functions#>
            SELECT * WHERE {
                SERVICE <https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql> {
                GRAPH <https://triplydb.com/FredericNoyer/lippmann/graphs/default> {
                    <${subject}> rdfs:label ?obj .
                }
                }
            }
            `)
            const label = rdf.dataset()
            await label.import(labelStream)
            for (const quad of label) {
                console.log(`${quad.object}`)
            }
        }
    }
    
    // console.log('######')
    // console.log(subjectArray)
    // console.log('******')
    // console.log(objectArray)
    // console.log('----')

  return {
    props:{
        artworks: artworks,
    }
  }
}

export default function ArtworksPage({
  artworks,
}: GetStaticPropsType) {
  return (
    <>
      <div>{artworks.map(artwork => <p>{artwork.subject}</p>)} ⭐</div>
    </>
  )
}