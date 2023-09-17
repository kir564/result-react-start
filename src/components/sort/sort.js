import { useDispatch, useSelector } from 'react-redux';
import { setSortAction } from '../../actions';
import {
  sortSelector,
  taskLoadingSelector,
  tasksLoadingSelector,
} from '../../selectors';
import styles from './sort.module.css';

export const Sort = () => {
  const dispatch = useDispatch();
  const sort_by = useSelector(sortSelector);
  const isLoadingTasks = useSelector(tasksLoadingSelector);
  const isLoadingTask = useSelector(taskLoadingSelector);

  const handleSort = () => {
    if (isLoadingTasks || isLoadingTask) {
      return;
    }
    dispatch(setSortAction(!sort_by));
  };

  return (
    <button className={styles.sort} onClick={handleSort}>
      Сортировать по {sort_by ? 'умолчанию' : 'алфавиту'}
    </button>
  );
};
