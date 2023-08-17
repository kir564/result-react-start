import { useState } from 'react';
import { requestChangeTask } from '../../handlers';
import styles from './change-task-modal.module.css';

export const ChangeTaskModal = ({ setIsChangingTask, taskForChange }) => {
  const [value, setValue] = useState(taskForChange.title);

  return (
    <div className={styles.wrapper}>
      <div className={styles.modal}>
        <div className={styles.title}>Измените задачу</div>
        <form
          onSubmit={(event) =>
            requestChangeTask({
              event,
              taskForChange,
              value,
              setIsChangingTask,
            })
          }
        >
          <input
            autoFocus
            className={styles.input}
            type='text'
            value={value}
            onChange={({ target }) => setValue(target.value)}
          />
          <div className={styles.buttons}>
            <button type='button' onClick={() => setIsChangingTask(false)}>
              Закрыть
            </button>
            <button>Изменить</button>
          </div>
        </form>
      </div>
    </div>
  );
};
