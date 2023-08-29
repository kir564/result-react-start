import { AddTask, Search, TaskList } from './components';
import { AppProvider } from './app-provider';
import styles from './app.module.css';

function App() {
  return (
    <AppProvider>
      <div className={styles.app}>
        <Search />
        <AddTask />
        <TaskList />
      </div>
    </AppProvider>
  );
}

export default App;
