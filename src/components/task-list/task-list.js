import styles from './task-list.module.css'

export const TaskList = ({ tasks }) => {
  return (
    <div className={styles.tasks}>
      {tasks.map(({ id, title }) => (
        <div className={styles.task} key={id}>
          {title}
        </div>
      ))}
    </div>
  );
};
