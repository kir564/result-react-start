import { store } from '../store';
import { STATUS, STORE_ACTION, PLAYER } from '../constants';
import { checkWin, checkEmptyCells } from '../utils';

export const handleCell = (index) => {
  const { status, currentPlayer, field } = store.getState();

  if (
    status === STATUS.WIN ||
    status === STATUS.DRAW ||
    field[index] !== PLAYER.NOBODY
  ) {
    return;
  }

  const newField = [...field];
  newField[index] = currentPlayer;
  store.dispatch({ type: STORE_ACTION.CLICK_CELL, field: newField });

  if (checkWin(newField, currentPlayer)) {
    store.dispatch({ type: STORE_ACTION.CHANGE_STATUS, status: STATUS.WIN });
    return;
  }

  if (!checkEmptyCells(newField)) {
    store.dispatch({ type: STORE_ACTION.CHANGE_STATUS, status: STATUS.DRAW });
    return;
  }

  if (currentPlayer === PLAYER.CROSS) {
    store.dispatch({
      type: STORE_ACTION.CHANGE_PLAYER,
      currentPlayer: PLAYER.NOUGHT,
    });
  }

  if (currentPlayer === PLAYER.NOUGHT) {
    store.dispatch({
      type: STORE_ACTION.CHANGE_PLAYER,
      currentPlayer: PLAYER.CROSS,
    });
  }
};
