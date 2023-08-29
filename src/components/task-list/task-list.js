import { useContext } from 'react';
import { Task } from '../../components';
import { AppContext } from '../../context';
import styles from './task-list.module.css';

export const TaskList = () => {
  const { tasks } = useContext(AppContext);
  
  return (
    <div className={styles.tasks}>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};
