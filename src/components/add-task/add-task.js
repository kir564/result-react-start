import { useContext, useState } from 'react';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { requestChangeTasks } from '../../requests';
import styles from './add-task.module.css';

export const AddTask = () => {
  const [newTask, setNewTask] = useState('');
  const { setUpdateFlag } = useContext(AppContext);

  const handleAdd = (event) => {
    event.preventDefault();
    setNewTask('');
    requestChangeTasks(
      ACTION.ADD,
      { title: newTask, completed: false },
      setUpdateFlag
    );
  };

  return (
    <form className={styles.add} onSubmit={handleAdd}>
      <input
        className={styles.input}
        placeholder='new task'
        value={newTask}
        onChange={({ target }) => setNewTask(target.value)}
      />
      <button>add</button>
    </form>
  );
};
