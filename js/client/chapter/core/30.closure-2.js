const body = document.getElementsByTagName('body')[0];
const btn = document.createElement('button');

btn.append('BUTTON');
body.appendChild(btn);

const closureToggle = (() => {
  let toggle = false;

  const handleBtnClick = () => {
    toggle = !toggle;

    if (toggle) body.style.backgroundColor = 'red';
    else body.style.backgroundColor = 'white';
  };

  return handleBtnClick;
})();

btn.addEventListener('click', closureToggle);

// useState mock
const useState = (init) => {
  let value = init;

  const state = () => {
    return value;
  };

  const setState = (newValue) => {
    value = newValue;
  };

  return [state, setState];
};

const [state, setState] = useState('initial');

console.log(state());

setState('new value');

console.log(state());

// closure 연습
const x = 'global';

function outer() {
  const x = 'outer';
  return function inner() {
    return x;
  };
}

function caller(fn) {
  const x = 'caller';
  return fn();
}

const s = caller(outer()); // 'outer'. 호출 위치(caller)가 아니라 선언 위치(outer) 기준
