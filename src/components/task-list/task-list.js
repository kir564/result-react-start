import { Link } from 'react-router-dom';
import { PATH } from '../../constants';
import styles from './task-list.module.css';

export const TaskList = ({ tasks, isLoad }) => {
  return isLoad ? (
    <h1>Load...</h1>
  ) : (
    <div className={styles.tasks}>
      {tasks.length === 0 ? (
        <div className={styles.notTasks}>задач не найдено</div>
      ) : (
        tasks.map((task) => (
          <Link
            className={styles.link}
            to={`${PATH.TASK}/${task.id}`}
            key={task.id}
          >
            <div className={styles.task}>{task.title}</div>
          </Link>
        ))
      )}
    </div>
  );
};
