import { ref, set } from 'firebase/database';
import { db } from '../firebase';
import { TABLE_NAME } from '../constants';

export const requestChangeTask = ({
  event,
  taskForChange,
  value,
  setIsChangingTask,
}) => {
  event.preventDefault();

  setIsChangingTask(false);

  const taskDbRef = ref(db, `${TABLE_NAME.TASKS}/${taskForChange.id}`);

  set(taskDbRef, {
    title: value,
    comleted: false,
  }).catch((error) => console.log('error - SET', error));
};
