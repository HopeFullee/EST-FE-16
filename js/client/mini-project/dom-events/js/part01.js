import {} from '../lib/dom/type.js';
import { getNode } from '../lib/dom/getNode.js';
import '../lib/dom/attr.js';
import '../lib/dom/css.js';
import '../lib/dom/insert.js';
import '../lib/dom/bindEvent.js';

const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

const navList = getNode('.navigation');

const createNavClickHandler = () => {
  let activeItem; // 내부 함수가 참조하는 클로저 변수

  return function (e) {
    e.preventDefault();
    const item = e.target.closest('li');

    // 첫 클릭 때 한 번만 현재 선택된 메뉴를 찾는다
    if (activeItem === undefined) {
      activeItem = this.querySelector(':scope > li.is-active');
    }

    if (!item || item.parentElement !== this || item === activeItem) return;

    activeItem?.classList.remove('is-active');
    item.classList.add('is-active');
    activeItem = item;
  };
};

navList.addEventListener('click', createNavClickHandler());
