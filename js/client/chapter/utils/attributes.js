const getAttr = (query, attr) => {
  return document.querySelector(query).getAttribute(attr);
};

/**
 * @function DOM Element의 속성 값을 설정하는 함수
 * @param {string} query - 쿼리셀렉터 CSS 선택자
 * @param {string} attr - 설정할 어트리뷰트 이름
 * @param {string} val - 설정할 어트리뷰트 값, 빈 문자열('')을 전달하면 어트리뷰트 제거
 * @throws {TypeError} attr이 문자 타입이 아닐 경우
 * @throws {Error} val이 없는 경우
 * @returns {void}
 */

const setAttr = (query, attr, val) => {
  if (!query || !attr || !val) throw new Error('모든 params 값을 입력해주세요');
  if (
    typeof query !== 'string' ||
    typeof attr !== 'string' ||
    typeof val !== 'string'
  )
    throw new TypeError('모든 params는 문자만 받습니다');

  const elem = document.querySelector(query);
  const prevAttr = elem.getAttribute(attr);

  if (!val) elem.removeAttribute(attr);
  else elem.setAttribute(attr, `${prevAttr} ${val}`);
};

/**
 * @function attribute 값을 가져오거나 설정하는 함수 (getAttr/ setAttr 통합)
 * @param {string} query - 쿼리셀렉터 CSS 선택자
 * @param {string} attr - 설정할 어트리뷰트 이름
 * @param {string} val - 설정할 어트리뷰트 값, 빈 문자열('')을 전달하면 어트리뷰트 제거, undefined 라면 getter
 * @returns {void}
 */

export const attribute = (query, attr, val) => {
  if (val === undefined) getAttr(query, attr);
  else setAttr(query, attr, val);
};
