import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants';

export const useRequestGetTasks = (refreshTodosFlag) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log('error-GET', error))
      .finally(() => setIsLoading(false));
  }, [refreshTodosFlag]);

  return {
    tasks,
    isLoading,
  };
};
