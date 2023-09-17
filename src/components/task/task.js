import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskAction, deleteTaskAction } from '../../actions';
import { useInput } from '../../hooks';
import { taskLoadingSelector } from '../../selectors';
import styles from './task.module.css';

export const Task = ({ task }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [isDone, setIsDone] = useState(task.completed);

  const isLoading = useSelector(taskLoadingSelector);
  const changeTask = useInput(task.title);

  const dispatch = useDispatch();

  const handleCancel = () => {
    if (isLoading) {
      return;
    }
    setIsChanging(false);
  };

  const handleChange = (event) => {
    if (isLoading) {
      return;
    }

    event.preventDefault();
    setIsChanging(true);
    if (isChanging) {
      setIsChanging(false);
      dispatch(
        changeTaskAction({
          ...task,
          title: changeTask.value,
        })
      );
    }
  };

  const handleDone = (target) => {
    if (isLoading) {
      return;
    }
    setIsDone(target.checked);
    dispatch(
      changeTaskAction({
        ...task,
        completed: target.checked,
      })
    );
  };

  const handleDelete = () => {
    if (isLoading) {
      return;
    }
    dispatch(deleteTaskAction(task));
  };

  return (
    <div className={styles.task}>
      <div className={styles.title}>
        <input
          checked={isDone}
          type='checkbox'
          value={isDone}
          onChange={({ target }) => handleDone(target)}
        />
        {isChanging ? (
          <form onSubmit={handleChange}>
            <input autoFocus={true} {...changeTask.bind} />
          </form>
        ) : (
          <span>{task.title}</span>
        )}
      </div>
      <div className={styles.buttons}>
        <button onClick={handleChange}>change</button>
        {isChanging ? (
          <button onClick={handleCancel}>cancel</button>
        ) : (
          <button onClick={handleDelete}>delete</button>
        )}
      </div>
    </div>
  );
};
