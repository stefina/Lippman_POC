import React from 'react';
import { Text } from '../../components/Text';
import { Heading } from '../../components/Heading';
import { ContentWrapper } from '../../components/ContentWrapper';

export default function index() {
  return (
    <ContentWrapper>
      <Heading as="h1" size="large">
        Gabriel Lippmann
      </Heading>
      <Heading as="h2" size="medium">
        Biographie
      </Heading>
      <Text marginTop={4}>
        Né au Luxembourg en 1845, Gabriel Lippmann a vécu et réalisé toute sa
        carrière à Paris. À la suite d’une thèse de physique soutenue en 1875 à
        la Sorbonne, il y enseigne et dirige le laboratoire des recherches
        physiques. Parmi ses travaux, il invente le procédé interférentiel et le
        présente en 1891 à l’Académie des sciences, dont il est membre depuis
        1886. Très novateur, son procédé intéresse rapidement d’autres
        personnalités, en particulier les frères Lumière. En 1908, Lippmann
        reçoit le prix Nobel de physique pour cette découverte.
      </Text>
      <Text marginTop={4}>
        Toute sa vie, le physicien s’intéresse à la façon de reproduire la
        réalité de la manière la plus fidèle possible à la perception humaine.
        Le procédé interférentiel est en effet le seul qui permette de fixer
        l’ensemble des couleurs du spectre lumineux selon une méthode
        « directe », au lieu d’en faire une décomposition et recomposition
        trichrome à l’aide de filtres, de colorants ou de pigments. Dans cette
        même perspective, Lippmann engage des recherches – inabouties en son
        temps – pour créer des photographies « intégrales » qui permettent de
        reproduire, en plus des couleurs, le relief.
      </Text>
      <Text marginTop={4}>
        En 1888, il épouse Laurence Cherbuliez, fille de l’académicien Victor
        Cherbuliez. Elle occupe une place prépondérante – encore à étudier –
        dans la production des plaques interférentielles. Très investi dans le
        monde scientifique, Gabriel Lippmann est aussi engagé dans les milieux
        photographiques, notamment à la Société française de photographie.
        Premier praticien de son procédé, il va ainsi s’adonner à la
        photographie en tant qu’amateur averti en collaboration avec sa femme.
        Paysages, natures mortes, portraits témoignent d’une sensibilité
        artistique autant que d’une volonté d’enregistrer les couleurs de la
        réalité. Le photographe Edward Steichen, à qui Lippmann a projeté des
        photographies de natures mortes dans son laboratoire, se souvient ainsi
        de l’apparition des couleurs « iridescentes » dont le réalisme était
        surprenant.
      </Text>
    </ContentWrapper>
  );
}
