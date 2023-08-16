import { useState } from 'react';
import { requestAddTask } from '../../handlers';
import styles from './add-task.module.css';

export const AddTask = ({
  refreshTodosFlag,
  setRefreshTodosFlag,
  isLoading,
}) => {
  const [newTask, setNewTask] = useState('');
  return (
    <form
      className={styles.add}
      onSubmit={(event) =>
        requestAddTask({
          event,
          refreshTodosFlag,
          setRefreshTodosFlag,
          setNewTask,
          newTask,
        })
      }
    >
      <input
        className={styles.input}
        type='text'
        placeholder='Новая задача'
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
      />
      <button className={styles.btn} disabled={isLoading}>
        Добавить
      </button>
    </form>
  );
};
