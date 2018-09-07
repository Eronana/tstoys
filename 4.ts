export { }

function test (a:string, b:number):{x:number, y:Date} {
  return null;
}

type TestReturnType = ReturnType<typeof test>;
const r = null as TestReturnType;

type FirstArgument<T> = T extends (a: infer R, ...args:any[]) => any ? R : any;
type SecondArgument<T> = T extends (a:any, b: infer R, ...args:any[]) => any ? R : any;

type TestFirstArgument = FirstArgument<typeof test>;
type TestSecondArgument = SecondArgument<typeof test>;

const a = null as TestFirstArgument;
const b = null as TestSecondArgument;
