import { ACTION } from '../constans';

export const loadingTaskAction = (value) => ({
  type: ACTION.IS_LOADING_TASK,
  payload: value,
});