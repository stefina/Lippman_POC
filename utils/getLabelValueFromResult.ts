import { ResultRow } from 'sparql-http-client/ResultParser';

export function getLabelValueFromResult(rows: ResultRow[]) {
  return rows.map((row: ResultRow) => row.label.value).join(', ');
}
