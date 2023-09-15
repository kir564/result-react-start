import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {setSortAction, getTasksAction} from '../../actions'
import { sortSelector } from '../../selectors';
import styles from './sort.module.css'

export const Sort = () => {
    // const [sortParams, setSortParams] = useState(false)
    const dispatch = useDispatch()
    const sort_by = useSelector(sortSelector)
    let isLoading

    const handleSort = () => {
        dispatch(setSortAction())
        dispatch(getTasksAction())
    
        // dispatch(sortAc())
      }
  return (
    <button
      disabled={isLoading}
      className={styles.sort}
      onClick={handleSort}
      // onClick={() => setIsSort((prev) => !prev)}
    >
      Сортировать по {sort_by ? 'умолчанию' : 'алфавиту'}
    </button>
  );
};
