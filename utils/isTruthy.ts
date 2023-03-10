// Fancy type predicate so that TypeScript understands that we filter falsy values
export type Truthy<T> = T extends false | '' | 0 | null | undefined ? never : T; // copied from lodash

export function isTruthy<T>(value: T): value is Truthy<T> {
  return !!value;
}
