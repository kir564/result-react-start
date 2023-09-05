import { legacy_createStore } from 'redux';
import { PLAYER, STATUS } from '../constants';
import { getInitialsField } from '../utils';
import { reduser } from './reduser';

export const initialState = {
  status: STATUS.GO,
  currentPlayer: PLAYER.CROSS,
  field: getInitialsField(),
};

export const store = legacy_createStore(reduser, initialState);
