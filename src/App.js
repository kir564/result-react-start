import { useState } from 'react';
import { useRequestTasks } from './hooks';
import { AddTask, Search, TaskList } from './components';
import { AppContext } from './context';
import styles from './app.module.css';

function App() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [isSort, setIsSort] = useState(false);
  const [phrase, setPhrase] = useState('');

  const { tasks } = useRequestTasks(updateFlag, isSort, phrase);

  return (
    <AppContext.Provider value={{ setUpdateFlag }}>
      <div className={styles.app}>
        <button
          className={styles.sort}
          onClick={() => setIsSort((prev) => !prev)}
        >
          Сортировать по {isSort ? 'добавлению' : 'алфавиту'}
        </button>
        <Search setPhrase={setPhrase} />
        <AddTask />
        <TaskList tasks={tasks} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
