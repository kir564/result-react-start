import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction } from '../../actions';
import { tasksLoadingSelector, taskLoadingSelector } from '../../selectors';
import { useInput } from '../../hooks';
import styles from './add-task.module.css';

export const AddTask = () => {
  const newTask = useInput('');
  const dispatch = useDispatch();
  const isLoadingTasks = useSelector(tasksLoadingSelector);
  const isLoadingTask = useSelector(taskLoadingSelector);

  const handleAdd = (event) => {
    event.preventDefault();

    if (isLoadingTasks || isLoadingTask) {
      return;
    }

    newTask.clearField();
    dispatch(addTaskAction({ title: newTask.value, completed: false }));
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
