export const getArtworkId = (string: string) => {
  return string.slice(string.length - 15, string.length).replace('/', '-');
};
