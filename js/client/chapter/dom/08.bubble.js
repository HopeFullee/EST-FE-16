import { getNode } from '../../lib/utils/get-node.js';

/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

/* 버블링 ----------------------------------------------------------------- */

section.addEventListener('click', (e) => {
  console.log(e.target);
  console.log(e.currentTarget);
  console.log('%c section', 'color:dodgerblue');
});

article.addEventListener('click', (e) => {
  console.log('%c article', 'color:orange');
});

p.addEventListener('click', (e) => {
  console.log('%c p', 'color:hotpink');
});

/* 캡처링 ----------------------------------------------------------------- */
