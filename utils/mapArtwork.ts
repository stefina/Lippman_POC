import { ResultRow } from 'sparql-http-client/ResultParser';
import { Artwork } from '../components/ArtworkCard';
import { getAccessionNumber } from './getAccessionNumber';
import { getHasCurrentOwner } from './getHasCurrentOwner';
import { getTitle } from './getTitle';
import { getTitleConstructed } from './getTitleConstructed';
import { isArtwork } from './isArtwork';
import testPicture0 from '../pages/lippmann.jpg';
import testPicture1 from '../pages/lippmann2.jpg';
import testPicture2 from '../pages/lippmann3.jpg';
import testPicture3 from '../pages/lippmann4.jpg';
import testPicture4 from '../pages/lippmann5.jpg';
import testPicture5 from '../pages/lippmann6.jpg';
import testPicture6 from '../pages/lippmann7.jpg';
import testPicture7 from '../pages/lippmann8.jpg';
import { getArtworkId } from './getArtworkId';
import { getBegin, getEnd } from './getTimeSpan';

const images = [
  testPicture0,
  testPicture1,
  testPicture2,
  testPicture3,
  testPicture4,
  testPicture5,
  testPicture6,
  testPicture7,
];

export async function mapArtwork(
  res: ResultRow,
  index: number
): Promise<Artwork | undefined> {
  const subject = res.subject ? res.subject.value : res.subj.value;
  const imageIndex = (index + 1) % 8;

  if (isArtwork(subject)) {
    const id = getId(subject);
    return {
      id: getArtworkId(subject),
      title: await getTitleConstructed(subject),
      author: subject,
      owner: await getHasCurrentOwner(subject),
      year: (await getBegin(id)) + ' - ' + (await getEnd(id)),
      image: images[imageIndex],
    };
  }
}

export function getId(link: string): string {
  let match = link.match('\\d{9}$');
  if (match) {
    return match[0];
  } else {
    return '';
  }
}
