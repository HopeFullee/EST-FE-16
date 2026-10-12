/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
const empty = null;

console.log(typeof empty);

// 2. 값이 할당되지 않은 상태
var undef = undefined;

console.log(undef);
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const text = 'text';
const text2 = 'text';
const text3 = `text`;

console.log(typeof text);
console.log(typeof text2);
console.log(typeof text3);

// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 1;
const float = 1.1;

console.log(typeof integer);
console.log(typeof float);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigInt = 123n;

console.log(typeof bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)
const isActive = false;

console.log(typeof isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = new Object();
const map = new Map();
const arr = new Array();

console.log(typeof obj);
console.log(typeof map);
console.log(typeof arr);

// 8. 고유한 식별자(unique identifier)
const key1 = Symbol('uuid');
const key2 = Symbol('uuid');

console.log(key1 === key2);
console.log(typeof key1);
console.log(typeof key2);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

const str = new String(123);

console.log(str);

console.log('asd');

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array

// function

// this
