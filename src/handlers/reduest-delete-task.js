import { TABLE_NAME } from '../constants';
import { ref, remove } from 'firebase/database';
import { db } from '../firebase';

export const requestDeleteTask = ({ id }) => {
  const taskDbRef = ref(db, `${TABLE_NAME.TASKS}/${id}`);
  remove(taskDbRef).catch((error) => console.log('error - DELETE', error));
};
