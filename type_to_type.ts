type Type2Type<T extends [any, any][], U> = T[{
  [key in keyof T]:T[key] extends [U, any] ? key : never
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
