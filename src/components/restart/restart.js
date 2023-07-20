import styles from './restart.module.css';
import PropTypes from 'prop-types';

export const Restart = ({ isEnd, setRestart }) => {
  return (
    isEnd && (
      <h2 onClick={() => setRestart(true)} className={styles.restart}>
        начать заново
      </h2>
    )
  );
};

Restart.propTypes = {
  isEnd: PropTypes.bool,
  setRestart: PropTypes.func,
};
