export function mapDate(begin: string, end: string) {
  if (begin) {
    const localizedBegin = new Date(begin).toLocaleDateString();
    if (end) {
      const localizedEnd = new Date(end).toLocaleDateString();
      return `${localizedBegin} - ${localizedEnd}`;
    }
    return localizedBegin;
  }
  return '';
}
