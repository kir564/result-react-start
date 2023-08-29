import { useEffect, useState } from 'react';
import { BASE_URL } from '../constans';

export const useRequestTasks = (updateFlag) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => console.log(err));
  }, [updateFlag]);

  return { tasks };
};
