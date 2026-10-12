/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

const resultX = calcTotal(10000, 8900, 1360, 2100);
const resultY = calcTotal(21500, 3200, 9800, 4700);
const resultZ = calcTotal(9000, -2500, 5000, 11900);

console.log(resultX);
console.log(resultY);
console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
const calculateTotal = function () {
  let sum = 0;

  for (const val of arguments) {
    sum += val;
  }

  return sum;
};

console.log(calculateTotal(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

const innerArr = ['inner1'];

const arr = [1, innerArr];
const copy = [...arr];

copy[0] = 99;
copy[1][0] = 'change';

console.log(arr);
console.log(copy);

const obj = {
  0: 1,
};

obj;

const arrFrom = Array.prototype.slice.call(obj);

arrFrom;

// 익명(이름이 없는) 함수 (표현)식
const anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
const namedFunctionExpression = function named() {};

// 콜백 함수 (표현)식
const callbackFunctionExpression = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;
