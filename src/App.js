import { useState } from 'react';
import { useRequestTasks } from './hooks';
import { AddTask, Search, TaskList } from './components';
import { AppContext } from './context';
import styles from './app.module.css';

const filterTasks = (tasks, searchPhrase) =>
  tasks.filter((task) =>
    task.title.toLowerCase().includes(searchPhrase.toLowerCase().trim())
  );

function App() {
  const [updateFlag, setUpdateFlag] = useState(false);
  const [phrase, setPhrase] = useState('');

  const { tasks } = useRequestTasks(updateFlag);
  const tasksFiltered = filterTasks(tasks, phrase);

  return (
    <AppContext.Provider value={{ setUpdateFlag }}>
      <div className={styles.app}>
        <Search setPhrase={setPhrase} />
        <AddTask />
        <TaskList tasks={tasksFiltered} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
