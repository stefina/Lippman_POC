import { ResultRow } from 'sparql-http-client/ResultParser';
import { Artwork } from '../components/ArtworkCard';
import { getAccessionNumber } from './getAccessionNumber';
import { getHasCurrentOwner } from './getHasCurrentOwner';
import { getTitle } from './getTitle';
import { isArtwork } from './isArtwork';
import testPicture from '../pages/lippmann-default.jpg';

export async function mapArtwork(res: ResultRow): Promise<Artwork | undefined> {
  const subject = res.subject.value;
  if (isArtwork(subject)) {
    return {
      id: subject.slice(8), // Next doesn't like "//" in hrefs so we remove them
      title: await getTitle(subject),
      author: subject,
      owner: await getHasCurrentOwner(subject),
      year: await getAccessionNumber(subject),
      image: testPicture,
    };
  }
}
