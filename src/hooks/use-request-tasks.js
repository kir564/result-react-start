import { useEffect, useState } from 'react';
import { BASE_URL } from '../constans';

export const useRequestTasks = (updateFlag, isSort, phrase) => {
  const [tasks, setTasks] = useState([]);
  const [isError, setIsError] = useState(false)
  
  
  const sortParams = isSort 
    ? '_sort=title&_order=asc' 
    : '_sort=id&_order=desc';

  useEffect(() => {
    fetch(`${BASE_URL}?${sortParams}&title_like=${phrase}`)
      .then((response) =>response.json())
      .then((data) => setTasks(data ))
      .catch((err) => {
        console.log(err)
        setIsError(true)
      });
  }, [updateFlag, isSort, phrase]);

  return { tasks, isError };
};
