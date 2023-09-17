import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTasksAction } from '../../actions';
import { Task, Loader } from '../../components';
import {
  tasksSelector,
  tasksLoadingSelector,
  taskLoadingSelector,
} from '../../selectors';
import styles from './task-list.module.css';

export const TaskList = () => {
  const dispatch = useDispatch();

  const tasks = useSelector(tasksSelector);
  const isLoadTasks = useSelector(tasksLoadingSelector);
  const isLoadTask = useSelector(taskLoadingSelector);

  useEffect(() => {
    dispatch(getTasksAction());
  }, []);

  return (
    <>
      {(isLoadTasks || isLoadTask) && <Loader />}
      <div className={styles.tasks}>
        {tasks.length === 0 && !isLoadTasks ? (
          <h3 style={{ color: 'red' }}>Задач не найдено </h3>
        ) : (
          tasks.map((task) => <Task key={task.id} task={task} />)
        )}
      </div>
    </>
  );
};
