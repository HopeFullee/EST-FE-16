/* --------------------- */
/* Event Handling        */
/* --------------------- */

/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])

/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = document.querySelector('.first');
const start = document.querySelector('.start');

const temp = `
  <button onclick="alert('XSS')">CLICK ME</button>
`;

first.innerHTML = temp;

const debounce = (cb, ms) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), ms);
  };
};

const addNew = debounce(() => {
  first.innerHTML += `<span>NEW</span>`;
}, 1000);

start.addEventListener('click', addNew);

function throttle(f, limit = 1000) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      f.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
