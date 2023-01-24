export interface SprinklesFnBase {
  (...args: any): string;
  properties: Set<string>;
}

export function extractAtomsFromProps<SprinklesFn extends SprinklesFnBase>(
  props: any,
  atomsFns: SprinklesFn[]
) {
  let atomProps: Record<string, unknown> = {};
  let otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (atomsFns.some((atomsFn) => atomsFn.properties.has(key))) {
      atomProps[key] = props[key];
    } else {
      otherProps[key] = props[key];
    }
  }

  return { atomProps, otherProps };
}
