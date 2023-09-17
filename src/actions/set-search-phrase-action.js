import { ACTION } from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const setSearchPhraseAction = (search_phrase) => (dispatch) => {
  const {
    params: { sort_by },
  } = store.getState();

  getTasksRequest(ACTION.SET_SEARCH_PHRASE, dispatch, {
    sort_by,
    search_phrase,
  });
};
