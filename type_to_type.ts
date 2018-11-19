type Type2Type<T extends [any, any][], U> = T[{
  [key in keyof T]:[U, any] extends T[key] ? key : never
}[number]][1];

interface A {
  x:string;
  y:number;
}
interface B {
  hello:'world';
}
interface C {
  typescript:true;
  javascript:false;
}

// create a mapper that map string, number and boolean to A, B and C
type Mapper<T> = Type2Type<[
  [string, A],
  [number, B],
  [boolean, C]
], T>;

// test the Mapper
type Test = Mapper<number>;
const test = {} as Test;

type F<T extends [any, any][]> = <U extends T[number][0]>(name:U, value:Type2Type<T, U>) => number;
type MapType = [
  [number, {name: string, n: number}],
  [string, {s: string, v: boolean}],
  [{x:string}, number]
];

const f:F<MapType> = () => 233;

f({x: 'ss'}, 4234);
f('asgdsg', {s: 'sgds', v: true});
f(234324, {name: 'sdgg', n: 2352});
