import { useEffect, useState } from 'react';
import styles from './search.module.css';

export const Search = ({ setPhrase }) => {
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhrase(searchPhrase);
    }, 500);

    return () => clearTimeout(timeout);
  });

  return (
    <div className={styles.search}>
      <input
        className={styles.input}
        placeholder='search'
        value={searchPhrase}
        onChange={({ target }) => setSearchPhrase(target.value)}
      />
    </div>
  );
};
