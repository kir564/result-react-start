import { loadingTaskAction, isErrorAction } from '.';
import { ACTION, BASE_URL, PATH, MAX_TIME_LOADING } from '../constans';

import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const addTaskAction = (task) => (dispatch) => {
  const { params } = store.getState();
  const url = new URL(PATH.TASKS, BASE_URL);

  let isLoadingTimeout = false;

  const timerId = setTimeout(() => {
    isLoadingTimeout = true;
  }, MAX_TIME_LOADING);

  dispatch(loadingTaskAction(true));

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  })
    .then(() => {
      if (isLoadingTimeout) {
        throw new Error();
      }

      clearTimeout(timerId);
      getTasksRequest(ACTION.ADD_TASK, dispatch, params);
    })
    .finally(() => {
      dispatch(loadingTaskAction(false));
    })
    .catch((error) => {
      console.log('error-addTaskAction: ', error);
      dispatch(isErrorAction(true));
    });
};
