import styles from './task-list.module.css';
import { requestDeleteTask } from '../../handlers';

export const TaskList = ({
  tasks,
  isLoading,
  setIsChangingTask,
  setTaskForChange,
}) => {
  const handleChange = ({ id, title }) => {
    setIsChangingTask(true);
    setTaskForChange({ id, title });
  };

  return (
    <div className={styles.tasks}>
      {tasks.map(({ id, title }) => (
        <div className={styles.task} key={id}>
          <div>{title}</div>
          <div className={styles.buttons}>
            <button
              disabled={isLoading}
              onClick={() => handleChange({ id, title })}
            >
              Изменить
            </button>
            <button
              disabled={isLoading}
              onClick={() => requestDeleteTask({ id })}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
