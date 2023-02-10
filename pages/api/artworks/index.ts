import { NextApiResponse, NextApiRequest } from 'next';
import { artworks } from '../../../data';
import { Artwork } from '../../../interfaces/artwork';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Artwork[]>
) {
  return res.status(200).json(artworks);
}
