export { }

type FunctionArguments<T> = T extends (...args: infer R) => any ? R : any;
function test(a:number, b:string, c:Date[]) {}
type TestArguments = FunctionArguments<typeof test>;

const alpha = {
  a: (x:number, y:string) => `${y}_${x}`,
  b(d:Date, n:number) {
    return d.valueOf() + n;
  }
}

function CallMethod<M extends {[k:string]:(...args:any[]) => any}>(m:M) {
  return <T extends keyof M>(name:T, ...args:FunctionArguments<M[T]>):ReturnType<M[T]> => {
    return m[name].apply(m, args);
  };
}

const callAlpha = CallMethod(alpha);
const aa = callAlpha('a', 1, 'sss');
const bb = callAlpha('b', new Date(), 666);
