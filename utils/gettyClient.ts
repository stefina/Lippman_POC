import ParsingClient from 'sparql-http-client/ParsingClient';

export const gettyClient = new ParsingClient({
  endpointUrl: 'https://data.getty.edu/vocab/sparql',
});
