import { ACTION } from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const getTasksAction = () => (dispatch) => {
  const { params } = store.getState();
  getTasksRequest(ACTION.GET_TASKS, dispatch, params);
};
