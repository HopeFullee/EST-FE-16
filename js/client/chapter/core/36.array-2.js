/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */

// Array.isArray

const people = [
  {
    id: 0,
    name: '이유정',
    age: 16,
    job: '중학생',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/75.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 1,
    name: '이소망',
    age: 34,
    job: '이야기꾼',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/60.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 2,
    name: '조민지',
    age: 25,
    job: '억만장자',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/60.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 3,
    name: '신재훈',
    age: 20,
    job: '닭강정킬러',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/50.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 4,
    name: '안경찬',
    age: 30,
    job: '중소기업 대표님',
    imgSrc: 'https://randomuser.me/api/portraits/med/men/30.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 5,
    name: '김효경',
    age: 22,
    job: '플라워리스트',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/10.jpg',
    imgAlt: '대체 텍스트...',
  },
  {
    id: 6,
    name: '박소연',
    age: 28,
    job: '카페 사장',
    imgSrc: 'https://randomuser.me/api/portraits/med/women/5.jpg',
    imgAlt: '대체 텍스트...',
  },
];

/* 요소 순환 ---------------------------- */

// forEach

people.forEach((user) => {
  // console.log( user );
});

const spans = document.querySelectorAll('span');

console.log(spans);

spans.forEach((span, index) => {
  span.addEventListener('click', function () {
    this.style.color = 'orange';
  });
});

// 아하! 그럼 중복되는 모든 이벤트 처리는 forEach로 하는구나!! 가 아닙니다.
// 이벤트 위임 (event delegation)

// 이벤트 바인딩

/* 원형 파괴 ----------------------------- */

// push
// pop
// unshift
// shift

// toReversed
const reverse = people.toReversed();

function compare(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

// toSorted
//
// const sort = people.toSorted(compare)

// reverse
// splice
// sort

/* 새로운 배열 반환 ------------------------ */

// concat [...arr,...arr2]

// slice

// toSpliced

console.clear();

// ⭐️ map ⭐️  새로운 배열을 반환
// 사람들의 이름만을 모아놓은 새로운 배열

const names = people.map((user, index) => user.name);

// 현재 나이에서 전부 +2살을한 새로운 배열을 만들어주세요.

const ages = people.map((user) => {
  return user.age + 2;
});

const tags = people
  .map(({ imgSrc, imgAlt, name, age, job }) => {
    // const {imgSrc, imgAlt, name, age, job} = user;

    const template = `
    <li>
      <figure>
        <img src="${imgSrc}">
        <figcaption>${imgAlt}</figcaption>
      </figure>  
      <ul>
        <li>이름 : ${name}</li>
        <li>나이 : ${age}</li>
        <li>직업 : ${job}</li>
      </ul>
    </li>
  `;
    return template;
  })
  .join('');

// tags.forEach()

document.querySelector('ul').insertAdjacentHTML('beforeend', tags);

/* 요소 포함 여부 확인 ---------------------- */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 ------------------------------ */

// find

const az = people.find((user) => {
  return user.age > 20;
});

// findIndex

/* 요소 걸러내기 --------------------------- */

// 새로운 배열을 반환하기 때문에 return은 필수 = map

const mz = people.filter((user) => user.age > 20);

// filter

/* 요소별 리듀서(reducer) 실행 -------------- */

// reduce

const total = people.reduce((acc, cur) => acc + cur.age, 0);

console.log(total);

const template = people.reduce((htmlCode, user) => {
  return htmlCode + `<li>${user.name}, ${user.age}, ${user.job}</li>`;
}, '');

document.querySelector('ul').insertAdjacentHTML('beforeend', template);

// reduceRight

/* string ←→ array 변환 ------------------ */

// split
// join

const product = [
  { name: '냉동 만두', price: 10000, brand: '비비고' },
  { name: '냉동 피자', price: 11000, brand: '오뚜기' },
  { name: '냉동 새우', price: 14000, brand: '곰곰' },
  { name: '냉동 치킨', price: 20000, brand: '하림' },
];

Array.prototype.mockForEach = function (callback) {
  let index = 0;

  for (const v of this) {
    callback(v, index++);
  }
};

// product.mockForEach((v) => {
//   console.log(v);
// });

Array.prototype.mockFilter = function (callback) {
  let index = 0;
  const results = [];

  for (const v of this) {
    if (callback(v, index++)) results.push(v);
  }

  return results;
};

const filtered = product.mockFilter((v) => {
  return v.price < 12000;
});

console.log(filtered);

// product.forEach((p) => console.log(p));
