import { useSelector } from 'react-redux';
import { AddTask, Search, Sort, TaskList } from './components';
import { errorSelector } from './selectors';
import styles from './app.module.css';

function App() {
  const isError = useSelector(errorSelector);

  if (isError) {
    return (
      <h3 style={{ color: 'red' }}>Ошибка при загрузке. Обновите страницу</h3>
    );
  }

  return (
    <div className={styles.app}>
      <Sort />
      <Search />
      <AddTask />
      <TaskList />
    </div>
  );
}

export default App;
