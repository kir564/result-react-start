import { useState, useEffect } from 'react';
import { TABLE_NAME } from '../constants';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTasks = () => {
  const [tasks, setTasks] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const tasksDbRef = ref(db, TABLE_NAME.TASKS);

    return onValue(tasksDbRef, (snapshot) => {
      const loadedTasks = snapshot.val() || {};

      setTasks(loadedTasks);
      setIsLoading(false);
    });
  }, []);

  return {
    tasks,
    isLoading,
  };
};
