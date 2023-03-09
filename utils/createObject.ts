const isValidKey = (x: unknown): x is string => typeof x === 'string';

export function createObject<T extends object, K extends keyof T>(
  array: T[],
  key: K
) {
  return array.reduce<Record<T[K] & string, T>>((accumulator, current) => {
    const valueAtKey = current[key];

    if (isValidKey(valueAtKey)) {
      accumulator[valueAtKey] = current;
    }
    return accumulator;
  }, {} as Record<T[K] & string, T>);
}
