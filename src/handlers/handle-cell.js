import {
  changePlayerAction,
  changeStatusAction,
  clickCellAction,
} from '../actions';
import { STATUS, PLAYER } from '../constants';
import { checkWin, checkEmptyCells } from '../utils';

export const handleCell = (index, state, dispatch) => {
  const { status, currentPlayer, field } = state;

  if (
    status === STATUS.WIN ||
    status === STATUS.DRAW ||
    field[index] !== PLAYER.NOBODY
  ) {
    return;
  }

  const newField = [...field];
  newField[index] = currentPlayer;
  dispatch(clickCellAction(newField));

  if (checkWin(newField, currentPlayer)) {
    dispatch(changeStatusAction(STATUS.WIN));
    return;
  }

  if (!checkEmptyCells(newField)) {
    dispatch(changeStatusAction(STATUS.DRAW));
    return;
  }

  if (currentPlayer === PLAYER.CROSS) {
    dispatch(changePlayerAction(PLAYER.NOUGHT));
  }

  if (currentPlayer === PLAYER.NOUGHT) {
    dispatch(changePlayerAction(PLAYER.CROSS));
  }
};
