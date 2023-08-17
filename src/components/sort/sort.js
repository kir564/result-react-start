import styles from './sort.module.css';

export const Sort = ({ isSort, setIsSort }) => {
  return (
    <button className={styles.buttonSort} onClick={() => setIsSort(!isSort)}>
      {isSort ? 'Отменить сортировку' : 'Сортировать по алфавиту'}
    </button>
  );
};
