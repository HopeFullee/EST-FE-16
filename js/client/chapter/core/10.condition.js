/* ---------------- */
/* Condition        */
/* ---------------- */

// const res = prompt('자바스크립트의 공식 이름은 무엇일까요?');

// if (res === 'ECMAScript') alert('정답입니다');
// else alert('모르셨나요? 정답은 ECMAScript 입니다!');

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

const watchMovie = () => {
  // 영화 봤니?
  let didWatchMovie = false;

  // 영화 볼거니?
  let goingToWatchMovie = false;

  // if 문(statement)
  if (didWatchMovie) {
    console.log('봤음');
  } else {
    console.log('안봤음');

    if (goingToWatchMovie) {
      console.log('볼거임');
    } else {
      console.log('안볼거임');
    }
  }
};

const watchMovie2 = () => {
  let didWatchMovie = 'yes';
  let goingToWatchMovie = 'yes';

  const 사망식 =
    didWatchMovie === 'yes'
      ? '또봐'
      : goingToWatchMovie === 'yes'
        ? '디지몬 정말 재밌겠다 👾'
        : '이건 부탁이 아니야 🗡️';

  console.log(사망식);
};

// OR 연잔자는 "눈치없는 친구" 단 한명이라도 `true`라면 `true`를 반환함.

const isLoaded = '';

const orRes = isLoaded || 'not yet loaded';
const nullishRes = isLoaded ?? 'not yet loaded';

console.log(orRes);
console.log(nullishRes);
