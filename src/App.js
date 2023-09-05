import { Field, Information, Restart } from './components';
import { store } from './store';
import { useStore } from './hooks';
import styles from './App.module.css';

function App() {
  const { update, status, currentPlayer, field  } = useStore();

  store.subscribe(() => {
    update();
  });

  return (
    <div className={styles.app}>
      <Information status={status} currentPlayer={currentPlayer} />
      <Field field={field} />
      <Restart />
    </div>
  );
}

export default App;
