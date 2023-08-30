import { useEffect } from 'react';
import { useInput } from '../../hooks';
import styles from './search.module.css';

export const Search = ({ setPhrase }) => {
  const phrase = useInput('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhrase(phrase.value);
    }, 500);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={styles.search}>
      <input
        autoFocus={true}
        className={styles.input}
        placeholder='search'
        {...phrase.bind}
      />
    </div>
  );
};
