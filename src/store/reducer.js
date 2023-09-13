import { STORE_ACTION, STATUS, PLAYER } from '../constants';
import { getInitialsField } from '../utils';

export const initialState = {
  status: STATUS.GO,
  currentPlayer: PLAYER.CROSS,
  field: getInitialsField(),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_ACTION.CLICK_CELL:
      return { ...state, field: action.field };

    case STORE_ACTION.CHANGE_STATUS:
      return { ...state, status: action.status };

    case STORE_ACTION.CHANGE_PLAYER:
      return { ...state, currentPlayer: action.currentPlayer };

    case STORE_ACTION.RESTART:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};
