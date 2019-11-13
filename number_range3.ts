type Push<A extends any[], T = any> = ((x:T, ...args:A)  => any) extends (...args:infer R) => any ? R : A;

type CreateArrayHelper<N extends number, R extends any[]> = {
    0:R;
    1:R['length'] extends N ? never : CreateArrayHelper<N, Push<R, R['length']>>;
}[R['length'] extends N ? 0 : 1];

type ARRAY_0 = [];
type ARRAY_20 = CreateArrayHelper<20, ARRAY_0>;
type ARRAY_40 = CreateArrayHelper<40, ARRAY_20>;
type ARRAY_60 = CreateArrayHelper<60, ARRAY_40>;
type ARRAY_80 = CreateArrayHelper<80, ARRAY_60>;
type ARRAY_100 = CreateArrayHelper<100, ARRAY_80>;

type CreateArray<T extends number>
    = T extends ARRAY_20[number] ? CreateArrayHelper<T, ARRAY_0>
    : T extends ARRAY_40[number] ? CreateArrayHelper<T, ARRAY_20>
    : T extends ARRAY_60[number] ? CreateArrayHelper<T, ARRAY_40>
    : T extends ARRAY_80[number] ? CreateArrayHelper<T, ARRAY_60>
    : T extends ARRAY_100[number] ? CreateArrayHelper<T, ARRAY_80>
    : CreateArrayHelper<T, ARRAY_100>
    ;

type NumberRange<T extends number> = CreateArray<T>[number];

type TEST_RANGE = NumberRange<118>;
