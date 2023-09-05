import { CELL_CONTENT } from '../../constants';
import { handleCell } from '../../handlers';
import styles from './field.module.css';

export const Field = ({ field }) => {
  return (
    <div className={styles.field}>
      {field.map((cellPlayer, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => {
            handleCell(index);
          }}
        >
          {CELL_CONTENT[cellPlayer]}
        </button>
      ))}
    </div>
  );
};
