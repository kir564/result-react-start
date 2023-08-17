import { useEffect, useRef, useState } from 'react';
import styles from './search-task.module.css';

export const SearchTask = ({ setQery, tasks, isChangingTask }) => {
  const [value, setValue] = useState('');

  const search = useRef('');

  useEffect(() => {
    if (!isChangingTask) {
      search.current.focus();
    }
  }, [tasks, isChangingTask]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setQery(value);
    }, 500);

    return () => clearTimeout(timerId);
  }, [value]);

  return (
    <form
      className={styles.search}
      onSubmit={(event) => event.preventDefault()}
    >
      <input
        ref={search}
        className={styles.input}
        type='text'
        placeholder='Поиск'
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </form>
  );
};
