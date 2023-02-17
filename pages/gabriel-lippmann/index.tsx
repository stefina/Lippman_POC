import React from 'react';
import { Text } from '../../components/Text';
import { Heading } from '../../components/Heading';
import { ContentWrapper } from '../../components/ContentWrapper';

export default function index() {
  return (
    <ContentWrapper>
      <Heading as="h1" size="large" paddingBottom={10}>
        Gabriel Lippmann: Scientist and Photographer
      </Heading>
      <Text marginTop={4}>
        Born in Luxembourg in 1845, Gabriel Lippmann lived and spent his entire
        career in Paris. After presenting a thesis in physics in 1875 at the
        Sorbonne, he taught there and directed the laboratory for research in
        physics. His research led him, among other things, to invent the
        interferential process that he presented in 1891 to the French Academy
        of Sciences, of which he had been a member since 1886. Very innovative,
        his process quickly interested other prominent personalities of his day,
        in particular, the Lumière brothers. In 1908, Lippmann was awarded the
        Nobel Prize in Physics for this discovery.
      </Text>
      <Text marginTop={4}>
        Throughout his life, he attempted to reproduce reality in a way that was
        as faithful as possible to human perception. The interferential process
        is in fact the only one in which the colors of the light spectrum can be
        fixed according to a &quot;direct&quot; method, instead of separating
        them into the three primary colors and then recomposing them using
        filters, dyes or pigments. In a similar vein, Lippmann undertook
        research – unfinished during his lifetime – to create
        &quot;integral&quot; photography that reproduces the relief in addition
        to the colors.
      </Text>
      <Text marginTop={4}>
        In 1888, he married Laurence Cherbuliez, daughter of the French Academy
        member Victor Cherbuliez. She played a major role – still to be
        elucidated – in the production of interferential plates. Very involved
        in the scientific world, Gabriel Lippmann was also involved in
        photographic circles, notably at the French Society of Photography. As
        the first person to actually use his process, he thus devoted himself to
        photography as an informed amateur together with his wife. Their
        landscapes, still lifes and portraits testify to an artistic sensitivity
        as much as to a desire to record the actual colors. The photographer
        Edward Steichen, for whom Lippmann projected still life photographs in
        his laboratory, remembers the appearance of &quot;iridescent&quot;
        colors whose realism was surprising.
      </Text>
    </ContentWrapper>
  );
}
