export class Artwork {
  id!: string;
  name?: string;
  subject?: string;
  predicate?: string;
  object?: string;
}

export type ResponseError = {
  message: string;
};
