import { Task } from '../../components';
import styles from './task-list.module.css';

export const TaskList = ({ tasks }) => {
  return (
    <div className={styles.tasks}>
      {tasks.length === 0 ? (
        <h3 style={{ color: 'red' }}>Задач не найдено </h3>
      ) : (
        tasks.map((task) => <Task key={task.id} task={task} />)
      )}
    </div>
  );
};
