import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { debounce } from '../../utils';
import { setSearchPhraseAction } from '../../actions';
import { DELAY_SEARCH } from '../../constans';
import styles from './search.module.css';

export const Search = () => {
  const [phrase, setPhrase] = useState('');
  const dispatch = useDispatch();

  const searchPhrase = (value) => {
    dispatch(setSearchPhraseAction(value));
  };

  const searchPhraseDebounse = useRef(
    debounce(searchPhrase, DELAY_SEARCH)
  ).current;

  const onChange = (event) => {
    setPhrase(event.target.value);
    searchPhraseDebounse(event.target.value);
  };

  return (
    <div className={styles.search}>
      <input
        autoFocus={true}
        className={styles.input}
        placeholder='search'
        value={phrase}
        onChange={onChange}
      />
    </div>
  );
};
