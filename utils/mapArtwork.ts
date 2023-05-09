import { ResultRow } from 'sparql-http-client/ResultParser';
import { Artwork } from '../components/ArtworkCard';
import Image_MEL_009079 from '../assets/MEL_LIPPMANN_Gabriel_009079.jpg';
import Image_MEL_009087 from '../assets/MEL_LIPPMANN_Gabriel_009087.jpg';
import Image_MEL_009089 from '../assets/MEL_LIPPMANN_Gabriel_009089.jpg';
import Image_MEL_009903 from '../assets/MEL_LIPPMANN_Gabriel_009903.jpg';
import Image_MEL_009907 from '../assets/MEL_LIPPMANN_Gabriel_009907.jpg';
import Image_MEL_009955 from '../assets/MEL_LIPPMANN_Gabriel_009955.jpg';
import Image_MEL_009986 from '../assets/MEL_LIPPMANN_Gabriel_009986.jpg';
import Image_MEL_010014 from '../assets/MEL_LIPPMANN_Gabriel_010014.jpg';
import { getArtworkProcess, getArtworkProcessURL } from './getArtworkProcess';
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
import { getCarriedOutBy } from './getCarriedOutBy';
import { getConcept } from './getConcept';
import { getTitle } from './getTitle';
import { StaticImageData } from 'next/image';

const images: Record<string, StaticImageData> = {
  Image_MEL_009079,
  Image_MEL_009087,
  Image_MEL_009089,
  Image_MEL_009903,
  Image_MEL_009907,
  Image_MEL_009955,
  Image_MEL_009986,
  Image_MEL_010014,
};

export async function mapArtwork(res: ResultRow): Promise<Artwork | undefined> {
  const subject = res.subject ? res.subject.value : res.subj.value; // TODO Make more resilient

  if (isArtwork(subject)) {
    const id = getId(subject);
    const accessionNumber = await getAccessionNumber(subject);
    return {
      id: getArtworkId(subject),
      title: await getTitle(subject),
      titleConstructed: await getTitleConstructed(subject),
      artworkURL: subject,
      owner: await getHasCurrentOwner(subject),
      year: mapDate(await getBegin(id), await getEnd(id)),
      artProcess: await getArtworkProcess(subject),
      concept: await getConcept(subject),
      conceptURL: await getArtworkProcessURL(subject),
      floraArkURL: await getFloraArkURL(subject),
      ownerOrgURL: await getOrganizationURL(subject),
      ownerOrgName: await getOrganizationName(subject),
      ownerOrgWikiDataURL: await getWikiDataOrganizationURL(subject),
      tookPlaceAt: await getTookPlaceAt(subject),
      wasProducedBy: await getWasProducedBy(subject),
      carriedOutBy: await getCarriedOutBy(subject),
      accessionNumber,
      image:
        accessionNumber && images[`Image_${accessionNumber}`]
          ? images[`Image_${accessionNumber}`]
          : null,
    };
  }
}
