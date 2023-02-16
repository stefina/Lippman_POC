import { NextApiRequest, NextApiResponse } from 'next';
import { artworks } from '../../../data';
import type { Artwork, ResponseError } from '../../../interfaces/artwork';

export default function artworkHandler(
  req: NextApiRequest,
  res: NextApiResponse<Artwork | ResponseError>
) {
  const { query } = req;
  const { id } = query;
  //   const artwork = artworks.find((a) => a.id === id)
  const artwork = artworks.find((a) => a.id === id);

  // artwork with id exists
  return artwork
    ? res.status(200).json(artwork)
    : res.status(404).json({ message: `Artwork with id: ${id} not found.` });
}
