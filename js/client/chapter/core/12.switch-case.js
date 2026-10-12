/* ---------------- */
/* Switch           */
/* ---------------- */

const MORNING = '아침';
const LUNCH = '점심';
const DINNER = '저녁';
const NIGHT = '밤';
const LATE_NIGHT = '심야';
const DAWN = '새벽';

let currentTime = '';

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

switch (currentTime) {
  case MORNING:
    console.log('뉴스 기사 글을 읽는다.');
    break;
  case LUNCH:
    console.log('자주 가는 식당에 가서 식사를 한다.');
    break;
  case DINNER:
    console.log('동네 한바퀴를 조깅한다.');
    break;
  case NIGHT:
    console.log('친구에게 전화를 걸어 수다를 떤다.');
    break;
  case LATE_NIGHT:
  case DAWN:
    console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
    break;
  default:
    console.log('어떤 시간에 있는겁니까');
}

/* switch문 → if문 변환 --------------------------------------------------- */

if (currentTime === MORNING) {
  console.log('뉴스 기사 글을 읽는다.');
} else if (currentTime === LUNCH) {
  console.log('자주 가는 식당에 가서 식사를 한다.');
} else if (currentTime === DINNER) {
  console.log('동네 한바퀴를 조깅한다.');
} else if (currentTime === NIGHT) {
  console.log('친구에게 전화를 걸어 수다를 떤다.');
} else if (currentTime === LATE_NIGHT || currentTime === DAWN) {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
} else {
  console.log('어떤 시간에 있는겁니까');
}

/* switch vs. if -------------------------------------------------------- */

// prompt를 통해서 숫자를 입렵받는다. (0 ~ 6 까지)
// 받은 숫자를 사용해서 switch case 사용하셈.
const parseNumToDay = (num) => {
  switch (Number(num)) {
    case 0:
      return '일';
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    case 6:
      return '토';
    default:
      return '그딴 날은 없습니다.';
  }
};

// pareseNumToDay 함수를 가지고
// 주말인지 평일인지 구분할 수 있는 함수 만들기.
const getWeekend = (day) => {
  const weekday = ['월', '화', '수', '목', '금'];
  const weekend = ['토', '일'];

  if (weekend.includes(day)) {
    return `오늘은 ${day}요일입니다. 주말입니다.`;
  } else if (weekday.includes(day)) {
    return `오늘은 ${day}요일입니다. 평일입니다.`;
  }

  return '그딴 날은 없습니다.';
};

const userNum = prompt('0 ~ 6 까지 입력하세요.');
const randomNum = Math.floor(Math.random() * 7);

const day = parseNumToDay(randomNum);
const today = getWeekend(day);

console.log(today);

let height = 0;

height = height || 200;

height;
