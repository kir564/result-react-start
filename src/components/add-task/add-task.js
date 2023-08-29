import { useContext, useState } from 'react';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { requestChangeTasks } from '../../requests';
import styles from './add-task.module.css';

export const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const { setUpdateFlag } = useContext(AppContext);

  const handleAdd = () => {
    requestChangeTasks(
      ACTION.ADD,
      { title: newTask, completed: false },
      setUpdateFlag
    );
  };

  return (
    <div className={styles.add}>
      <input
        className={styles.input}
        placeholder='new task'
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
      />
      <button onClick={handleAdd}>add</button>
    </div>
  );
};
