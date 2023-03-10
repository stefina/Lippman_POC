const artworkregex = /^https:\/\/pe\.plateforme10\.ch\/Artwork\/\d{5}\/\d{9}$/;

export const isArtwork = (string: string) => string.match(artworkregex);
