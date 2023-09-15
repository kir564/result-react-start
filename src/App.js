import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useRequestTasks } from './hooks';
import { AddTask, Search, Sort, TaskList } from './components';
import { AppContext } from './context';
import styles from './app.module.css';
import { tasksSelector, sortSelector } from './selectors';
import { changeSortAction, getTasksAction } from './actions';
import { setSortAction, sortAc } from './actions/set-sort-action';
import { SORT_BY, SORT_IS } from './constans';

function App() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [phrase, setPhrase] = useState('');

  // const {  isError, isLoading, setIsLoading } = useRequestTasks(
  // const { tasks, isError, isLoading, setIsLoading } = useRequestTasks(
    // updateFlag,
    // isSort,
    // phrase
  // );

  let isError 
  let isLoading

  const dispatch = useDispatch()
  const tasks = useSelector(tasksSelector)
  console.log('tasks-app: ', tasks);
  const sort_by = useSelector(sortSelector)
  // console.log('sort_by: ', sort_by);

  useEffect(() => {
    dispatch(getTasksAction())
  }, [])


  

  if (isError) {
    return (
      <h3 style={{ color: 'red' }}>Ошибка при загрузке. Обновите страницу</h3>
    );
  }

  return (
    // <AppContext.Provider value={{ setUpdateFlag, isLoading, setIsLoading }}>
      <div className={styles.app}>
        <Sort/>
        <Search />
        <AddTask />
        {isLoading && tasks.length === 0 ? (
          <h3>Load...</h3>
        ) : (
          <TaskList  />
          // <TaskList tasks={tasks} />
        )}
      </div>
    // </AppContext.Provider>
  );
}

export default App;
