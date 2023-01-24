import React from 'react';
import Text from '../../components/text/Text';
import CustomLink from '../../components/link/Link';
import Heading from '../../components/heading/Heading';
import { ContentWrapper } from '../../components/ContentWrapper';

export default function AProposPage() {
  return (
    <ContentWrapper>
      <Heading size="large">A Propos</Heading>
      <Heading size="medium">Catalogue raisonné</Heading>
      <Text>
        D’ici à 2025, Photo Elysée publiera en ligne le catalogue raisonné des
        plaques Lippmann, c’est-à-dire l’inventaire de toutes les photographies
        interférentielles aujourd’hui conservées. Une première étape de la
        recherche en cours a été de localiser les collections publiques et
        privées qui possèdent de tels objets. Par la suite, toutes les plaques
        seront décrites, de manière à indiquer l’auteur, la date, les
        dimensions, le sujet représenté, etc. Ce catalogue permettra également
        de rassembler des indications sur la matérialité et l’état de
        conservation de chaque objet.
      </Text>
      <Text>
        Cette étude a pour ambition d’affiner la connaissance de la collection
        de Photo Elysée, en précisant quelle a été la place de Gabriel Lippmann
        tant dans l’histoire des sciences – déjà bien connue – que dans celle de
        la photographie, encore peu étudiée. Il s’agira de saisir le rôle du
        physicien dans les milieux photographiques de son époque, de cerner ses
        collaborations et d’identifier les adeptes de son procédé tout en
        repérant leur production. Il s’agira également d’examiner quelle a été
        la réception de son invention et sa diffusion à l’échelle
        internationale. Cette recherche permettra ainsi de situer plus
        précisément le procédé interférentiel dans l’histoire de la photographie
        en s’attachant à ses usages, à l’étude de l’iconographie associée ainsi
        qu’à ses modes de présentation et de circulation (projection,
        exposition).
      </Text>
      <Heading size="medium">Photo Elysée</Heading>
      <Text>
        Enfin, un travail dans les archives permet d’enrichir la connaissance.
        Ainsi, en rapprochant la correspondance envoyée par Gabriel Lippmann à
        sa mère en octobre 1902, on peut dater les photographies représentant
        Venise. Par ailleurs, la recherche a fait émerger la figure de son
        épouse, Laurence, impliquée dans ce qui apparaît comme une pratique
        photographique de couple. Dès lors, aucune des photographies conservées
        n’étant signée, il devient – sauf dans certains cas précis – impossible
        d’attribuer la plupart des plaques à Gabriel ou à Laurence Lippmann.
        C’est la raison pour laquelle les deux noms sont généralement mentionnés
        ensemble comme auteurs.
      </Text>
      <Text>
        <CustomLink link="https://www.elysee.ch" label="www.elysee.ch" />
      </Text>
    </ContentWrapper>
  );
}
