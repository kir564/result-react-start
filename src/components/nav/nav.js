import { Link, useNavigate } from 'react-router-dom';
import { PATH } from '../../constants';
import styles from './nav.module.css';

export const Nav = ({ isTasks }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.nav}>
      {!isTasks && (
        <Link to={PATH.TASKS}>
          <button className={styles.btn}>{'<< Все задачи'}</button>
        </Link>
      )}
      <Link to={PATH.MAIN}>
        <button className={styles.btn}>{'<< Главная'}</button>
      </Link>
      <button onClick={() => navigate(-1)} className={styles.btn}>
        {'<< Назад'}
      </button>
    </div>
  );
};
