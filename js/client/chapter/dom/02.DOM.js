import { getNode } from '../../lib/utils/get-node.js';
/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

const h1 = document.querySelector('h1');

/* 요소 노드에서만 사용 가능 */
// - parentElement
console.log(h1.parentElement);
// - children
console.log(h1.children);
// - firstElementChild
console.log(h1.firstElementChild);
// - lastElementChild
console.log(h1.lastElementChild);
// - previousElementSibling
console.log(h1.previousElementSibling);
// - nextElementSibling
console.log(h1.nextElementSibling);

/* 문서 대상 찾기 */
// - getElementById
const box = document.getElementById('box');
// - getElementsByTagName
const div = document.getElementsByTagName('div');
// - getElementsByClassName
const container = document.getElementsByClassName('container');
// - querySelector
const box2 = document.querySelector('#box');
// - querySelectorAll
const divs = document.querySelectorAll('div');
// - closest
const closest = box.closest('body');

/* 문서 대상 확인 */
// - matches
// - contains

console.log(getNode('.child', '.parent'));
