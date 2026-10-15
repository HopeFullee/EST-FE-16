export const debounce = (cb, ms) => {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => cb(...args), ms);
  };
};

export function throttle(f, limit = 1000) {
  let wait = false;

  return function (...args) {
    if (!wait) {
      f.apply(this, args);
      wait = true;
      setTimeout(() => (wait = false), limit);
    }
  };
}
