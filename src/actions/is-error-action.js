import { ACTION } from '../constans';

export const isErrorAction = (value) => ({
  type: ACTION.IS_ERROR,
  payload: value,
});
