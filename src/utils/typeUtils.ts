export type valueof<T> = T[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T>(object: T) => (keyof T)[];

export type CleanDato<T> = Omit<
  T,
  | '_createdAt'
  | '_isValid'
  | '_modelApiKey'
  | '_seoMetaTags'
  | '_status'
  | '_updatedAt'
  | 'createdAt'
  | 'isValid'
  | 'modelApiKey'
  | 'seoMetaTags'
  | 'status'
  | 'updatedAt'
  | 'id'
>;
export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];
