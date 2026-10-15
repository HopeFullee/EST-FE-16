import { getNode } from '../../lib/utils/get-node.js';

/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

/* 클래스를 사용한 위임 ---------------- */

const navElem = getNode('.navigation');

// navElem.addEventListener('click', (e) => {
//   const t = e.target.closest('li');

//   if (!t) return;

//   switch (t.className) {
//     case 'home':
//       console.log('홈');
//       break;
//     case 'about':
//       console.log('어바웃');
//       break;
//     case 'contact':
//       console.log('컨텍트');
//       break;
//   }
// });

navElem.addEventListener('click', (e) => {
  const t = e.target.closest('li');

  if (!t) return;

  // switch (t.className) {
  //   case 'home':
  //     console.log('홈');
  //     break;
  //   case 'about':
  //     console.log('어바웃');
  //     break;
  //   case 'contact':
  //     console.log('컨텍트');
  //     break;
  // }

  switch (t.dataset.name) {
    case 'home':
      console.log('홈');
      break;
    case 'about':
      console.log('어바웃');
      break;
    case 'contact':
      console.log('컨텍트');
      break;
  }
});

/* 속성을 사용한 위임 ------------------ */

/* 노드를 사용한 위임 ------------------ */
