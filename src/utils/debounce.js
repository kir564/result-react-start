export const debounce = (fn, delay) => {
  let timerId;

  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, ...args);
  };
};
