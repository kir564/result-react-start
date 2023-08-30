import { useContext, useState } from 'react';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { useInput } from '../../hooks';
import { requestChangeTasks } from '../../requests';
import styles from './task.module.css';

export const Task = ({ task }) => {
  const [isChanging, setIsChanging] = useState(false);
  const [isDone, setIsDone] = useState(task.completed);
  const { setUpdateFlag } = useContext(AppContext);
  const changeTask = useInput(task.title)

  const handleCancel = () => {
    setIsChanging(false);
  };

  const handleChange = () => {
    setIsChanging(true);
    if (isChanging) {
      setIsChanging(false);
      requestChangeTasks(
        ACTION.CHANGE,
        { ...task, title: changeTask.value },
        setUpdateFlag
      );
    }
  };

  const handleDone = (target) => {
    setIsDone(target.checked);
    requestChangeTasks(
      ACTION.CHANGE,
      { ...task, completed: target.checked },
      setUpdateFlag
    );
  };

  const handleDelete = () => {
    requestChangeTasks(ACTION.DELETE, task, setUpdateFlag);
  };

  return (
    <div className={styles.task}>
      <div className={styles.title}>
        <input
          checked={task.completed}
          type='checkbox'
          value={isDone}
          onChange={({ target }) => handleDone(target)}
        />
        {isChanging ? (
          <input
            autoFocus={true}
            {...changeTask.bind}
          />
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
