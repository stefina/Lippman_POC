import ParsingClient from 'sparql-http-client/ParsingClient';

export const gettyClient = new ParsingClient({
  endpointUrl: 'https://data.getty.edu/museum/collection/sparql',
  headers: {
    'user-agent':
      'Liip/Lippmann/POC/0.0 (https://lippmann.elysee.ch/, opendata@liip.ch',
  },
});
