import rdf from 'rdf-ext';

export async function getValue(stream: any) {
  const dataset = rdf.dataset();
  const value = await dataset.import(stream);
  return value;
}
