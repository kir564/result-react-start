import { store, initialState } from '../store';
import { STORE_ACTION } from '../constants';

export const handleRestart = () => {
  store.dispatch({
    type: STORE_ACTION.RESTART,
    payload: {
      ...initialState,
    },
  });
};
