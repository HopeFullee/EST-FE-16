/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty: () => {
    return 'this is a override from prototype.hasOwnProperty';
  },
};

Object.prototype.nickName = 'hope';

const newObj = {
  new: 'new',
};

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

Object.prototype.hasOwnProperty = () => {
  return `원래 hasOwnProperty 이였는데 "이함수는 이제 제 겁니다"`;
};

Object.prototype.hasOwn = () => {
  return `원래 hasOwn 이였는데 "이함수는 이제 제 겁니다"`;
};

console.log(Object.hasOwnProperty.call(newObj, 'new'));
console.log(Object.hasOwn(newObj, 'new'));

// console.log('nickName' in javaScript);

// console.log(javaScript.hasOwnProperty('hasOwnProperty'));

// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickName'));

// for (const val in newObj) {
//   if (Object.hasOwn(newObj, val)) {
//     console.log(val);
//   }
//   console.log(val);
// }
