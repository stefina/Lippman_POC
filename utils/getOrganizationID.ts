export async function getOrganizationID(link: string): Promise<string> {
  let match = link.match('Q\\d{6,8}$');
  if (match) {
    return match[0];
  } else {
    return '';
  }
}
