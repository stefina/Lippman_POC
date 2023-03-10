import { ResultRow } from 'sparql-http-client/ResultParser';

export function getValueFromResultRows(rows: ResultRow[]) {
  return rows.map((row: ResultRow) => row.obj.value).join(', ');
}
