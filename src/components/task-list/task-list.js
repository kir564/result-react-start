import { Task } from '../../components';
import styles from './task-list.module.css';

export const TaskList = ({ tasks }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
