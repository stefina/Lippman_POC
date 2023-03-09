import ParsingClient from 'sparql-http-client/ParsingClient';

export const client = new ParsingClient({
  endpointUrl:
    'https://api.triplydb.com/datasets/FredericNoyer/lippmann/services/lippmann/sparql',
});
