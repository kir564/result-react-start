import { ACTION } from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const setSortAction = (sort_by) => (dispatch) => {
  const {
    params: { search_phrase },
  } = store.getState();

  getTasksRequest(ACTION.SET_SORT, dispatch, { search_phrase, sort_by });
};
