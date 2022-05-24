export type valueof<T> = T[keyof T];

type ObjectEntriesReturn<T> = [keyof T, valueof<T>][];
type ObjectEntries = <T>(object: T) => ObjectEntriesReturn<T>;
type ObjectKeys = <T>(object: T) => (keyof T)[];

export const objectEntries: ObjectEntries = object => Object.entries(object) as ObjectEntriesReturn<typeof object>;
export const objectKeys: ObjectKeys = object => Object.keys(object) as (keyof typeof object)[];
