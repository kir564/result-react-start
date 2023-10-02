import { PLAYER } from '../constants';

export const checkEmptyCells = (field) =>
  field.some((item) => item === PLAYER.NOBODY);
