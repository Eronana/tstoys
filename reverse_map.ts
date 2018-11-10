type ReverseMap<T extends {[key:string]:string}> = {
  [kv in T[keyof T]]:{
    [kk in keyof T]:kv extends T[kk] ? kk : never
  }[keyof T]
};

type test = ReverseMap<{a:'hello', b:'world'}>;
/*
type test = {
    hello: "a";
    world: "b";
}
*/
