import { loadingTaskAction, isErrorAction } from '.';
import { BASE_URL, ACTION, PATH, MAX_TIME_LOADING } from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const changeTaskAction = (task) => (dispatch) => {
  const { params } = store.getState();
  const url = new URL(PATH.TASKS + task.id, BASE_URL);

  dispatch(loadingTaskAction(true));

  let isLoadingTimeout = false;

  const timerId = setTimeout(() => {
    isLoadingTimeout = true;
  }, MAX_TIME_LOADING); 

  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  })
    .then(() => {
      if(isLoadingTimeout) {
        throw new Error()
      }

      clearTimeout(timerId)
      getTasksRequest(ACTION.CHANGE_TASK, dispatch, params);
    })
    .finally(() => {
      dispatch(loadingTaskAction(false));
    })
    .catch((error) => {
      console.log('error-changeTaskAction: ', error);
      dispatch(isErrorAction(true));
    });
};
