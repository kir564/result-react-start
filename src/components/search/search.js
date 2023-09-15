import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getTasksAction } from '../../actions';
import { setSearchPhraseAction } from '../../actions/set-search-phrase-action';
import { useInput } from '../../hooks';
import styles from './search.module.css';

export const Search = () => {
  const phrase = useInput('');
  // console.log('phrase: ', phrase.value);

  const dispatch = useDispatch()

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearchPhraseAction(phrase.value))
      dispatch(getTasksAction())
      // setPhrase(phrase.value);
    }, 500);

    return () => clearTimeout(timeout);
  },[phrase.value]);

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
