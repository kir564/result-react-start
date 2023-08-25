import { useEffect, useState } from 'react';
import styles from './find-task.module.css';

export const FindTask = ({ setQuery }) => {
  const [fragment, setFragment] = useState('');

  useEffect(() => {
    const timerId = setTimeout(() => {
      setQuery(fragment);
    }, 500);

    return () => clearTimeout(timerId);
  }, [fragment]);

  return (
    <label className={styles.label}>
      <input
        autoFocus={true}
        className={styles.find}
        placeholder='Поиск'
        value={fragment}
        onChange={({ target }) => setFragment(target.value)}
      />
    </label>
  );
};
