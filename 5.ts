export type Diff<T, U> = T extends U ? never : T;
export type Filter<T, U> = T extends U ? T : never;
export type Omit<T, U> = Pick<T, Diff<keyof T, U>>;

type A = 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
type B = Diff<A, 'b' | 'd'>;
type C = Filter<A, 'b' | 'd' | 'x' | 'y'>;

interface I {
  a:number;
  b:string;
  c:Date;
}

type P = Pick<I, 'a' | 'c'>;
type O = Omit<I, 'a'>;

