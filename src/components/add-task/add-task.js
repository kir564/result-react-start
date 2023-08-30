import { useContext } from 'react';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { useInput } from '../../hooks';
import { requestChangeTasks } from '../../requests';
import styles from './add-task.module.css';

export const AddTask = () => {
  const newTask = useInput('');
  const { setUpdateFlag } = useContext(AppContext);

  const handleAdd = (event) => {
    event.preventDefault();
    newTask.clearField();
    
    requestChangeTasks(
      ACTION.ADD,
      { title: newTask.value, completed: false },
      setUpdateFlag
    );
  };

  return (
    <form className={styles.add} onSubmit={handleAdd}>
      <input
        className={styles.input}
        placeholder='new task'
        {...newTask.bind}
      />
      <button>add</button>
    </form>
  );
};
