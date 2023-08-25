import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useRequestTasks } from './hooks';
import { NotFound, Task, Tasks } from './components';
import { PATH, SELECT_OPTIONS } from './constants';
import { filterTasks } from './utils';
import styles from './todo.module.css';

const Todo = () => {
  const [isUpdatedFlag, setIsUpdatedFlag] = useState(false);
  const [query, setQuery] = useState('');
  const [sortingValue, setSortingValue] = useState(SELECT_OPTIONS[0]);

  const { isLoad, tasks } = useRequestTasks(isUpdatedFlag);
  const tasksFiltered = filterTasks({ tasks, query, sortingValue });

  const updateFlag = { isUpdatedFlag, setIsUpdatedFlag };

  return (
    <div className={styles.todo}>
      <Routes>
        <Route
          path={PATH.MAIN}
          element={
            <Link to={PATH.TASKS}>
              <h1>todo</h1>
            </Link>
          }
        />
        <Route
          path={PATH.TASKS}
          element={
            <Tasks
              tasks={tasksFiltered}
              isLoad={isLoad}
              updateFlag={updateFlag}
              setQuery={setQuery}
              setSortingValue={setSortingValue}
              sortingValue={sortingValue}
            />
          }
        />
        <Route
          path={`${PATH.TASK}/:id`}
          element={
            <Task
              tasks={tasksFiltered}
              updateFlag={updateFlag}
              isLoad={isLoad}
            />
          }
        />
        <Route path={PATH.NOT_FOUND} element={<NotFound />} />
        <Route path={PATH.OTHERS} element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default Todo;
