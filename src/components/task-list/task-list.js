import { useSelector} from 'react-redux'
import { Task } from '../../components';
import { tasksSelector } from '../../selectors';
import styles from './task-list.module.css';

export const TaskList = () => {
  const tasks = useSelector(tasksSelector)
  
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
