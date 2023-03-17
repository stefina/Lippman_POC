const idRegex = /\d{5}\/\d{9}$/;

export function getId(link: string): string {
  let match = link.match(idRegex);
  if (match) {
    return match[0];
  } else {
    return '';
  }
}
