import { ResultRow } from 'sparql-http-client/ResultParser';
import { Artwork } from '../components/ArtworkCard';
import testPicture0 from '../pages/lippmann.jpg';
import testPicture1 from '../pages/lippmann2.jpg';
import testPicture2 from '../pages/lippmann3.jpg';
import testPicture3 from '../pages/lippmann4.jpg';
import testPicture4 from '../pages/lippmann5.jpg';
import testPicture5 from '../pages/lippmann6.jpg';
import testPicture6 from '../pages/lippmann7.jpg';
import testPicture7 from '../pages/lippmann8.jpg';
import { getArtProcess } from './getArtProcess';
import { getArtworkId } from './getArtworkId';
import { getHasCurrentOwner } from './getHasCurrentOwner';
import { getId } from './getId';
import { getBegin, getEnd } from './getTimeSpan';
import { getTitleConstructed } from './getTitleConstructed';
import { isArtwork } from './isArtwork';
import { mapDate } from './mapDate';
import { getFloraArkURL } from './getFloraArkURL';
import {
  getOrganizationName,
  getOrganizationURL,
  getWikiDataOrganizationURL,
} from './getOrganization';
import { getAccessionNumber } from './getAccessionNumber';
import { getTookPlaceAt } from './getTookPlaceAt';
import { getWasProducedBy } from './getWasProducedBy';

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
  const subject = res.subject ? res.subject.value : res.subj.value; // TODO Make more resilient
  const imageIndex = (index + 1) % 8;

  if (isArtwork(subject)) {
    const id = getId(subject);
    return {
      id: getArtworkId(subject),
      title: await getTitleConstructed(subject),
      artworkURL: subject,
      owner: await getHasCurrentOwner(subject),
      year: mapDate(await getBegin(id), await getEnd(id)),
      image: images[imageIndex],
      artProcess: await getArtProcess(subject),
      floraArkURL: await getFloraArkURL(subject),
      ownerOrgURL: await getOrganizationURL(subject),
      ownerOrgName: await getOrganizationName(subject),
      ownerOrgWikiDataURL: await getWikiDataOrganizationURL(subject),
      tookPlaceAt: await getTookPlaceAt(subject),
      wasProducedBy: await getWasProducedBy(subject),
      accessionNumber: await getAccessionNumber(subject),
    };
  }
}
