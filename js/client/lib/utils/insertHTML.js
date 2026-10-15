/**
 * @function insertAdjacentElement 메서드의 default position 명을 커스텀 맵핑한 함수
 * @param {HTMLElement} elem - HTML에 삽입할 요소
 * @param {string} position - HTML에 삽일할 위치 (커스텀 값) 문자만 받음
 * @param {string} template - HTML
 * @returns {void}
 */

export const myInsertHTML = (elem, position, template) => {
  const map = {
    insertBefore: 'beforebegin',
    insertFirst: 'afterbegin',
    insertEnd: 'beforeend',
    insertAfter: 'afterend',
  };

  elem.insertAdjacentHTML(map[position], template);
};
