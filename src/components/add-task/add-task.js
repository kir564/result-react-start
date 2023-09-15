import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTaskAction } from '../../actions';
import { ACTION } from '../../constans';
import { AppContext } from '../../context';
import { useInput } from '../../hooks';
import { requestChangeTasks } from '../../requests';
import styles from './add-task.module.css';

export const AddTask = () => {
  const newTask = useInput('');
  // const { setUpdateFlag, isLoading, setIsLoading } = useContext(AppContext);
  const dispatch = useDispatch()

  let isLoading = false


  const handleAdd = (event) => {
    event.preventDefault();
    newTask.clearField();
    dispatch(addTaskAction({title: newTask.value, completed: false}))
  };

  return (
    <form className={styles.add} onSubmit={handleAdd}>
      <input
        className={styles.input}
        placeholder='new task'
        {...newTask.bind}
      />
      <button disabled={isLoading}>add</button>
    </form>
  );
};
