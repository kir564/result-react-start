import { useState } from 'react';
import { ACTION } from '../../constants';
import { handleAddTask } from '../../handlers';
import styles from './add-task.module.css';

export const AddTask = ({ updateFlag, isLoad }) => {
  const [newTask, setNewTask] = useState('');
  const [isAdd, setIsAdd] = useState(false);

  return (
    <div>
      <form
        onSubmit={(event) =>
          handleAddTask({
            action: ACTION.ADD,
            title: newTask,
            updateFlag,
            event,
            setIsLoadAction: setIsAdd,
            setNewTask,
          })
        }
        className={styles.add}
      >
        <input
          className={styles.input}
          type='text'
          placeholder='Новая задача'
          value={newTask}
          onChange={({ target }) => setNewTask(target.value)}
        />
        <button disabled={isLoad || isAdd} className={styles.btn}>
          Добавить
        </button>
      </form>
      {isAdd && <div>Load...</div>}
    </div>
  );
};
