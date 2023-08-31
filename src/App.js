import { useState } from 'react';
import { useRequestTasks } from './hooks';
import { AddTask, Search, TaskList } from './components';
import { AppContext } from './context';
import styles from './app.module.css';

function App() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [phrase, setPhrase] = useState('');

  const { tasks, isError, isLoading, setIsLoading } = useRequestTasks(
    updateFlag,
    isSort,
    phrase
  );

  if (isError) {
    return (
      <h3 style={{ color: 'red' }}>Ошибка при загрузке. Обновите страницу</h3>
    );
  }

  return (
    <AppContext.Provider value={{ setUpdateFlag, isLoading, setIsLoading }}>
      <div className={styles.app}>
        <button
          disabled={isLoading}
          className={styles.sort}
          onClick={() => setIsSort((prev) => !prev)}
        >
          Сортировать по {isSort ? 'добавлению' : 'алфавиту'}
        </button>
        <Search setPhrase={setPhrase} />
        <AddTask />
        {isLoading && tasks.length === 0 ? (
          <h3>Load...</h3>
        ) : (
          <TaskList tasks={tasks} />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
