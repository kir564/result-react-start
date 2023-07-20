import styles from './buttons.module.css';
import React, { useState } from 'react';
import { showElement } from './utils/utils';
import PropTypes from 'prop-types';

export const Buttons = ({
  count,
  setCount,
  setTitle,
  history,
  setHistory,
  setputEnd,
  putEnd,
  pointerEvents,
}) => {
  return (
    <div
      className={`${styles.buttons}`}
      style={{ pointerEvents: pointerEvents }}
      onClick={(event) =>
        showElement({
          event,
          setCount,
          setTitle,
          count,
          history,
          setHistory,
          setputEnd,
          putEnd,
        })
      }
    >
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <button className={styles.btn} key={item} data-index={item}>
          <span className={styles.none}></span>
        </button>
      ))}
    </div>
  );
};

Buttons.propTypes = {
  count: PropTypes.number,
  setCount: PropTypes.func,
  setTitle: PropTypes.func,
  history: PropTypes.object,
  setHistory: PropTypes.func,
  setputEnd: PropTypes.func,
  putEnd: PropTypes.string,
  pointerEvents: PropTypes.string,
};
