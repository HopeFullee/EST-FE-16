import data from './data/index.js';
import { randomNum } from './lib/math/index.js';
import { typeError, refError } from './lib/errors/index.js';
import { createFieldHint } from './lib/util/index.js';

const jujeobForm = document.getElementById('jujeob-form');
const nameField = document.getElementById('nameField');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

let value = '';

const nameFieldHandler = (e) => {
  value = e.target.value;
};

const submitHandler = (e) => {
  e.preventDefault();
  const targetElem = e.target.elements.nameField;
  const fieldValue = targetElem.value;

  if (!fieldValue) {
    createFieldHint(targetElem, '이름을 입력해주세요.');
    refError('이름을 입력해주세요.');
  }
  if (/^\d+$/.test(fieldValue)) {
    createFieldHint(targetElem, '숫자만 입력할 수 없습니다.');
    typeError('숫자만 입력할 수 없습니다.');
  }

  targetElem.nextElementSibling?.remove();
  const rnd = randomNum(data().length);
  result.textContent = data(value)[rnd];
};

jujeobForm.addEventListener('input', nameFieldHandler);
jujeobForm.addEventListener('submit', submitHandler);
