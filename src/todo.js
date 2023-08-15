import { useState, useEffect } from 'react';
import { TaskList } from './components';
import { BASE_URL } from './constants';
import styles from './todo.module.css';

function Todo() {
  const [tasks, setTasks] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log('error-GET', error))
      .finally(() => setIsLoading(false))
  }, []);

  return (
    <div className={styles.todo}>
      {isLoading && (
        <div className={styles.wrapperLoader}>
          <div className={styles.loader}></div>
        </div>
      )}
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default Todo;
