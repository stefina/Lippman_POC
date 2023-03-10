export function getObjectValue(dataset: any) {
  // A dataset looks like this:
  // Map(1) {
  //   '1:1:1:' => {
  //     obj: Literal {
  //       value: 'Plaque Lippmann: Mont Cervin',
  //       datatype: [NamedNode],
  //       language: ''
  //     }
  //   }
  // }
  if (
    dataset._quads.entries().next().value &&
    dataset._quads.entries().next().value.length
  ) {
    return dataset._quads.entries().next().value[1].obj.value;
  }
  return 'undefined';
}
