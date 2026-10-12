/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let c = true;
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = c && a;
AandB;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !!b;
reverseValue;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && { thisIsFalsy: false } && [];
// whichFalsy;

// 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || { thisIsTruthy: true } || [2, 3].length;
// whichTruthy;

// 대소문자 구분
// 공백 검사

const validateId = () => {
  const id = prompt('아이디를 입력하세요.');
  const hasValue = id !== null && !!id.trim();
  const validateID = hasValue && id.toLowerCase() === 'admin';

  if (!hasValue) {
    console.log('취소되었습니다.');
    return false;
  }

  if (!validateID) {
    console.log('관리자 아이디가 아닙니다.');
    return false;
  }

  return true;
};

const validatePw = (id) => {
  if (!id) return false;

  const pw = prompt('비밀번호를 입력하세요.');
  const hasValue = pw !== null && !!pw.trim();
  const validatePW = hasValue && pw.toLowerCase() === 'themaster';

  if (!hasValue) {
    console.log('취소되었습니다.');
    return false;
  }

  if (!validatePW) {
    console.log('인증에 실패했습니다.');
    return false;
  }

  return true;
};

const login = () => {
  const id = validateId();
  const pw = validatePw(id);

  if (id && pw) console.log('환영합네다');
};

login();
