import { STORE_ACTION } from '../constants';
import { initialState } from '../store';

export const restartAction = () => ({
  type: STORE_ACTION.RESTART,
  payload: { ...initialState },
});
