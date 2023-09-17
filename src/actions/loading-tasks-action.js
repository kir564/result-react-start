import { ACTION } from '../constans';

export const loadingTasksAction = (value) => ({
  type: ACTION.IS_LOADING_TASKS,
  payload: value,
});
