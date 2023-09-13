import { restartAction } from '../actions';

export const handleRestart = (dispatch) => {
  dispatch(restartAction());
};
