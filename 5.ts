type A = 'a' | 'b' | 'c' | 'd' | 'e' | 'f';

type Diff<T, U> = T extends U ? never : T;
type Filter<T, U> = T extends U ? T : never;

type B = Diff<A, 'b' | 'd'>;
type C = Filter<A, 'b' | 'd' | 'x' | 'y'>;

type Omit<T, U> = Pick<T, Diff<keyof T, U>>;

interface I {
  a:number;
  b:string;
  c:Date;
}

type P = Pick<I, 'a' | 'c'>;
type O = Omit<I, 'a'>;
