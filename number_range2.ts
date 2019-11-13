type Push<A extends any[], T = any> = ((x:T, ...args:A)  => any) extends (...args:infer R) => any ? R : A;
type RangeHelper<T extends number, U extends number, A extends any[]> = {
    0:U;
    1:A['length'] extends T ? never : RangeHelper<T, U | A['length'], Push<A>>;
}[A['length'] extends T ? 0 : 1];
type CreateTupleHelper<N extends number, T, R extends any[]> = {
    0:R;
    1:R['length'] extends N ? never : CreateTupleHelper<N, T, Push<R, T>>;
}[R['length'] extends N ? 0 : 1];

type ARRAY_0 = [];
type ARRAY_20 = CreateTupleHelper<20, any, ARRAY_0>;
type ARRAY_40 = CreateTupleHelper<40, any, ARRAY_20>;
type ARRAY_60 = CreateTupleHelper<60, any, ARRAY_40>;
type ARRAY_80 = CreateTupleHelper<80, any, ARRAY_60>;
type ARRAY_100 = CreateTupleHelper<100, any, ARRAY_80>;

type RANGE_20 =  RangeHelper<20, 0, ARRAY_0>;
type RANGE_40 =  RangeHelper<40, RANGE_20, ARRAY_20>;
type RANGE_60 =  RangeHelper<60, RANGE_40, ARRAY_40>;
type RANGE_80 =  RangeHelper<80, RANGE_60, ARRAY_60>;
type RANGE_100 =  RangeHelper<100, RANGE_80, ARRAY_80>;

type NumberRange<T extends number>
    = T extends RANGE_20 ? RangeHelper<T, 0, ARRAY_0>
    : T extends RANGE_40 ? RangeHelper<T, RANGE_20, ARRAY_20>
    : T extends RANGE_60 ? RangeHelper<T, RANGE_40, ARRAY_40>
    : T extends RANGE_80 ? RangeHelper<T, RANGE_60, ARRAY_60>
    : T extends RANGE_100 ? RangeHelper<T, RANGE_80, ARRAY_80>
    : RangeHelper<T, RANGE_100, ARRAY_100>
    ;

type TEST_RANGE = NumberRange<120>;
