import { ResultRow } from 'sparql-http-client/ResultParser';
import { Artwork } from '../components/ArtworkCard';
import { getAccessionNumber } from './getAccessionNumber';
import { getHasCurrentOwner } from './getHasCurrentOwner';
import { getTitle } from './getTitle';
import { isArtwork } from './isArtwork';
import testPicture from '../pages/lippmann-default.jpg';
import { getArtworkId } from './getArtworkId';

export async function mapArtwork(res: ResultRow): Promise<Artwork | undefined> {
  const subject = res.subject.value;
  if (isArtwork(subject)) {
    return {
      id: getArtworkId(subject),
      title: await getTitle(subject),
      author: subject,
      owner: await getHasCurrentOwner(subject),
      year: await getAccessionNumber(subject),
      image: testPicture,
    };
  }
}
