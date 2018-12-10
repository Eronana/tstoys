type CreateArrayHelper<N extends number, A extends any[]> = {
  true:A;
  false:CreateArrayHelper<N, ArrayAppend<A>>;
}[A['length'] extends N ? 'true' : 'false'];
type CreateArray<N extends number> = CreateArrayHelper<N, []>;
type ArrayAppend<T extends any[], U = (x:any, ...args:T) => any> = U extends (...args:infer R) => any ? R : T;
type ArrayReduce<T extends any[], U = (...args:T) => any> = U extends (x:any, ...args:infer R) => any ? R : [];
type Equal<A, B> = A extends B ? true : false;
type NumberCompareHelper<A extends number, B extends number, AA extends any[], BB extends any[]> = {
  less:'less';
  greater:'greater';
  reduce:NumberCompareHelper<A, B, ArrayAppend<AA>, ArrayAppend<BB>>;
}[
  AA['length'] extends A ? 'less'
  : BB['length'] extends B ? 'greater'
  : 'reduce'
];
type NumberCompare<A extends number, B extends number> = A extends B ? 'equal' : NumberCompareHelper<A, B, [], []>;
type NumberLess<A extends number, B extends number> = Equal<NumberCompare<A, B>, 'less'>;
type NumberEqual<A extends number, B extends number> = Equal<A, B>;
type NumberGreater<A extends number, B extends number> = Equal<NumberCompare<A, B>, 'greater'>;
type NumberListHelper<N extends number, A extends any[]> = {
  true:never;
  false:A['length'] | NumberListHelper<N, ArrayAppend<A>>;
}[A['length'] extends N ? 'true' : 'false'];
type NumberList<N extends number> = NumberListHelper<N, []>;
type NumberRangeHelper<L extends number, R extends number, A extends any[]> = {
  true:NumberListHelper<R, A>;
  false:NumberRangeHelper<L, R, ArrayAppend<A>>;
}[A['length'] extends L ? 'true' : 'false'];
type NumberRange<L extends number, R extends number> = NumberRangeHelper<L, R, []>;
