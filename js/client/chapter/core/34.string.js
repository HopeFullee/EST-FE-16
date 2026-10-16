/* -------------------- */
/* String Type          */
/* -------------------- */

let message = 'Less is more.';

// length 프로퍼티
let stringTotalLength = message.length;

// 특정 인덱스의 글자 추출
let extractCharacter = message.charAt(5);

// 문자열 중간 글자를 바꾸는 건 불가능
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = 'more' + message.slice(4);

// 부분 문자열 추출
let slice = message.slice();
let subString = message.substring(5, 7);
let subStr = message.subStr;

// 문자열 포함 여부 확인
let indexOf = message.indexOf('is');
let lastIndexOf = message.lastIndexOf('is');
let includes = message.includes('more');
let startsWith = message.startsWith('Less');
let endsWith = message.endsWith('more.');

// 공백 잘라내기
let trimLeft;
let trimRight;
let trim;

// 텍스트 반복
let repeat;

// 대소문자 변환
let toLowerCase;
let toUpperCase;

// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;
