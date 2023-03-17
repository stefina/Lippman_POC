import ParsingClient from 'sparql-http-client/ParsingClient';

export const wikidataClient = new ParsingClient({
  endpointUrl: 'https://query.wikidata.org/sparql',
  headers: {
    'User-Agent':
      'Liip/Lippmann/POC/0.0 (https://lippmann.elysee.ch/, opendata@liip.ch',
  },
});
