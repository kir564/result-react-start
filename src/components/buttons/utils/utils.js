import styles from '../buttons.module.css';

const addClassName = (event, className) => {
  event.target.firstChild.classList.add(`${className}`);
};

const checkClassName = (event, className) => {
  return event.target.matches(`.${className}`);
};

export const showElement = ({
  event,
  setCount,
  setTitle,
  count,
  history,
  setHistory,
  setputEnd,
}) => {
  if (
    checkClassName(event, styles.btn) &&
    !checkClassName(event, styles.cross) &&
    !checkClassName(event, styles.zero)
  ) {
    setCount(count + 1);
    const index = event.target.dataset.index;

    if (count % 2 === 0) {
      setTitle('ходят нолики');
      addClassName(event, styles.cross);
      setHistory({ ...history, [index]: ['x', event.target] });
      setputEnd('x');
    } else {
      setTitle('ходят крестики');
      addClassName(event, styles.zero);
      setHistory({ ...history, [index]: ['o', event.target] });
      setputEnd('o');
    }
    event.target.disabled = true;
  }
};
