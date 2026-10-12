/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

// console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
// console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
// console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
// console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
// console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언

function calcPrice(a, b, c) {
  if (a === undefined) throw new Error('그딴 건 없습니다.');

  return a + b + c;
}

// 함수 호출

// const totalPrice = calcPrice(100, 200, 300);
// console.log(totalPrice);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;

function rem(px, base = 16) {
  if (!px) throw new Error('px 값이 비어있습니다.');

  let pxToNum = 0;

  if (typeof px === 'string') {
    pxToNum = Number(px.match(/^\d+/));
  }

  const calc = pxToNum / 16;

  return calc + 'rem';
}

// console.log(rem('16px'));

// css(node: string, prop: string, value: number|strung) : string;
function getCss(elem, prop) {
  const res = getComputedStyle(elem).getPropertyValue(prop);
  return res;
}

function setCss(elem, prop, value) {
  elem.style[prop] = value;
}

function CSS(query, prop, value) {
  if (!(prop in document.body.style))
    throw new Error(`${prop} 유효한 CSS 속성이 아닙니다.`);

  const elem = document.querySelector(query);

  return value ? setCss(elem, prop, value) : getCss(elem, prop);
}

console.log(CSS('.first', 'font-size', '200px'));

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
