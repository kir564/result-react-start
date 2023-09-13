import { PATTERNS } from '../constants';

export const checkWin = (field, currentPlayer) =>
  PATTERNS.WIN.some((pattern) =>
    pattern.every((item) => field[item] === currentPlayer)
  );
