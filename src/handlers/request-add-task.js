import { TABLE_NAME } from '../constants';
import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const requestAddTask = ({ event, setNewTask, newTask }) => {
  event.preventDefault();
  setNewTask('');

  const tasksDbRef = ref(db, TABLE_NAME.TASKS);

  push(tasksDbRef, {
    title: newTask,
    comleted: false,
  }).catch((error) => console.log('error - PUSH', error));
};
