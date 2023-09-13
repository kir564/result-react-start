import { Field, Information, Restart } from './components';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Information />
      <Field />
      <Restart />
    </div>
  );
}

export default App;
