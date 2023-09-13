import { STORE_ACTION } from '../constants';

export const changePlayerAction = (player) => ({
  type: STORE_ACTION.CHANGE_PLAYER,
  currentPlayer: player,
});
