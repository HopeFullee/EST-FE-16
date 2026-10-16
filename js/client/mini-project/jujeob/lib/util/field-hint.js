import { typeError } from '../errors/type-error.js';

export const createFieldHint = (field, msg = 'default Error Msg') => {
  if (!(field instanceof Element)) typeError('only HTML Elements are allowed');

  const hintElem = document.createElement('p');
  hintElem.classList.add('hint-msg');
  hintElem.textContent = msg;

  field.nextElementSibling?.remove();
  field.after(hintElem);
};
