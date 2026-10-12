/* --------------------- */
/* Type Conversion       */
/* --------------------- */

/* 데이터 → 문자 ----------------------------------------------------------- */

const year = 2026;

console.log(String(year));
console.log(year + ''); // autotype

// undefined, null

const months = null;

console.log(String(months));
console.log(months + ''); // autotype

// boolean

const isActive = false;

console.log(String(isActive));
console.log(isActive + ''); // autotype

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined

// eslint-disable-next-line no-unassigned-vars
let undef;

console.log(Number(undef));
console.log(undef * 1); // autotype

// null

const n = null;

console.log(Number(null));
console.log(null * 1); // autotype

// boolean

const bool = false;

console.log(Number(bool));
console.log(bool * 1); // autotype

// string

const str = '100';

console.log(Number(str));
console.log(str * 1); // autotype

// numeric string

const numeric = '100.5px';

console.log(parseInt(numeric));
console.log(parseFloat(numeric));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

// 위에 나열한 것 이외의 것들
console.log(Boolean('0'));
console.log(Boolean(' '));
console.log(!!-1);
console.log(!!{});
console.log(!![]);
