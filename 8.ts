// reference from Oliver's share: https://gist.github.com/OliverUv/ce74cb9fb6ee3a5d64ac77cb6c4bd874
export interface WithDate {
  date_added_unix_s:number;
}

export interface WithMetadata {
  type:string;
  author:string; // user id
  version:number; // If the data format changes, bump this number
  dependencies:string[];
}

export interface WithContentHash {
  reference:string;
}

export interface WithContentBuffer {
  buffer:Uint8Array;
}

export interface WithName {
  name:string;
}

export type AddContent = WithMetadata & WithName & WithContentBuffer;
export type Content = WithMetadata & WithContentBuffer & WithDate;
export type ContentReference = WithMetadata & WithDate & WithContentHash;

// This can be a handy way, a bit less compliacted than using the
// Diff and Filter generic types

// -------------------------------------
// here is how to implement `Partial2`
import { Omit } from './5';

type Partial2<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;

interface I {
  a:string;
  b:number;
  c:'a' | 'b' | 'c';
  d:(a:number) => string;
}

type PI = Partial2<I, 'a' | 'c'>;
const pi = null  as PI;
