import { useEffect, useState } from 'react';
import { BASE_URL, MAX_TIME_LOADING, PATH } from '../constans';

export const useRequestTasks = (updateFlag, isSort, phrase) => {
  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const url = new URL(PATH.TASKS, BASE_URL);
  url.searchParams.set('_sort', isSort ? 'title' : 'id');
  url.searchParams.set('_order', isSort ? 'asc' : 'desc');
  url.searchParams.set('title_like', phrase);

  useEffect(() => {
    setIsLoading(true);
    let isLoadingTimeout = false;

    const timerId = setTimeout(() => {
      isLoadingTimeout = true;
    }, MAX_TIME_LOADING);

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (!isLoadingTimeout) {
          setTasks(data);
          clearTimeout(timerId);
          setIsLoading(false);
        } else {
          throw new Error();
        }
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [updateFlag, isSort, phrase]);

  return { tasks, isError, isLoading, setIsLoading };
};
