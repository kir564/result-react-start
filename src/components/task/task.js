import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeTaskAction, deleteTaskAction } from '../../actions';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { useInput } from '../../hooks';
import { requestChangeTasks } from '../../requests';
import styles from './task.module.css';

export const Task = ({ task }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [isDone, setIsDone] = useState(task.completed);

  // const { setUpdateFlag, setIsLoading, isLoading } = useContext(AppContext);
  let isLoading = false
  const changeTask = useInput(task.title);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setIsChanging(false);
  };

  const handleChange = (event) => {
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
    setIsDone(target.checked);
    dispatch( 
      changeTaskAction({
        ...task,
        completed: target.checked,
      })
    );
  };

  const handleDelete = () => {
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
        <button disabled={isLoading} onClick={handleChange}>
          change
        </button>
        {isChanging ? (
          <button onClick={handleCancel}>cancel</button>
        ) : (
          <button disabled={isLoading} onClick={handleDelete}>
            delete
          </button>
        )}
      </div>
    </div>
  );
};
