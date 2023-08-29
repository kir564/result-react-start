import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context';
import styles from './search.module.css';

export const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState('');

  const { setPhrase } = useContext(AppContext)
  
  useEffect(() => {
    const timeout = setTimeout(() => {
        setPhrase(searchPhrase)
    }, 500);

    return () => clearTimeout(timeout)
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
