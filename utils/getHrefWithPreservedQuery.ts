import { ParsedUrlQuery } from 'querystring';
import { Url } from '../components/Clickable';

export function getHrefWithPreservedQuery(
  path: string,
  query: ParsedUrlQuery
): Url {
  const { search } = query;
  return search ? { pathname: path, query: { search } } : path;
}
