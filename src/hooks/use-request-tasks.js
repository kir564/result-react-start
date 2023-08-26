import { useEffect, useState } from 'react';
import { BASE_URL } from '../constants';

export const useRequestTasks = (isUpdatedFlag) => {
  const [tasks, setTasks] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    fetch(BASE_URL.TASKS)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
        setIsLoad(false);
      })
      .catch((error) => console.log(error))
      .finally(() => {});
  }, [isUpdatedFlag]);

  return { isLoad, tasks };
};
