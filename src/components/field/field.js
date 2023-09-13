import { useSelector, useDispatch } from 'react-redux';
import { fieldSelector } from '../../selectors';
import { store } from '../../store';
import { handleCell } from '../../handlers';
import { CELL_CONTENT } from '../../constants';
import styles from './field.module.css';

export const Field = () => {
  const field = useSelector(fieldSelector);
  const dispatch = useDispatch();
  const state = store.getState();

  return (
    <div className={styles.field}>
      {field.map((cellPlayer, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => {
            handleCell(index, state, dispatch);
          }}
        >
          {CELL_CONTENT[cellPlayer]}
        </button>
      ))}
    </div>
  );
};
