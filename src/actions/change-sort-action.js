import { ACTION, PATH, BASE_URL } from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const changeSortAction = (paramsSort) => (dispatch) => {
//   dispatch(ACTION.CHANGE_SORT);
  getTasksRequest(ACTION.GET_TASKS, dispatch);
};
