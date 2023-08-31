import { useEffect, useState } from 'react';
import { BASE_URL, MAX_TIME_LOADING } from '../constans';

export const useRequestTasks = (updateFlag, isSort, phrase) => {
  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const sortParams = isSort ? '_sort=title&_order=asc' : '_sort=id&_order=desc';

  useEffect(() => {
    setIsLoading(true);
    let isLoadingTimeout = false;

    const timerId = setTimeout(() => {
      isLoadingTimeout = true;
    }, MAX_TIME_LOADING);

    fetch(`${BASE_URL}?${sortParams}&title_like=${phrase}`)
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
