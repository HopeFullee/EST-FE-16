export const addClass = (target, cn) => {
  const elem = document.querySelector(target);

  const cnArr = Object.values(cn).filter((c) => /^[A-Za-z]+$/.test(c));

  console.log(cnArr);

  elem.classList.add(...cnArr);
};
