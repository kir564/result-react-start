import { ACTION } from '../constans';
import { getTasksRequest } from '../utils';

export const getTasksAction = () => (dispatch) => {
  getTasksRequest(ACTION.GET_TASKS, dispatch);
};
