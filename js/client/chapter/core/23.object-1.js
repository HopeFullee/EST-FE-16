/* --------- */
/* Object    */
/* --------- */

/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
const cssMap = {};

// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  id: 123,
  name: 'hope',
  email: 'hope@naver.com',
  activeStatus: true,
  tier: 'paid',
};

// Object.prototype.pollution = 'this prototype is polluted';
Array.prototype.pollution = 'this prototype is polluted';

const getValues = (obj) => {
  console.log(obj);

  const arr = Object.entries(obj);

  console.log(arr);

  const arr2 = [1, 2, 3];

  for (const v of arr2) {
    console.log(arr2.pollution);
  }

  for (const [key, val] of arr) {
    arr;
  }

  const values = Object.entries(obj).map(([key, val]) => {
    return val;
  });

  return values;
};

console.log(getValues(authUser));

// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

// 프로퍼티 포함 여부 확인

// 프로퍼티 나열

// 프로퍼티 제거 or 삭제

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {
  name,
  email,
  authorization,
  isLogin,
};

console.log(student);

// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...

// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2,
};

const obj = {
  0: 0,
  innerObj: {
    val: 0,
  },
};

// const [one, two] = arrayLike;
