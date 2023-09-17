import { isErrorAction, loadingTaskAction } from '.';
import { ACTION, BASE_URL, PATH , MAX_TIME_LOADING} from '../constans';
import { store } from '../store/store';
import { getTasksRequest } from '../utils';

export const deleteTaskAction = (task) => (dispatch) => {
  const { params } = store.getState();
  const url = new URL(PATH.TASKS + task.id, BASE_URL);

  dispatch(loadingTaskAction(true));

  let isLoadingTimeout = false;

  const timerId = setTimeout(() => {
    isLoadingTimeout = true;
  }, MAX_TIME_LOADING); 

  fetch(url, {
    method: 'DELETE',
  })
    .then(() => {
      if(isLoadingTimeout) {
        throw new Error()
      }

      clearTimeout(timerId)
      getTasksRequest(ACTION.DELETE_TASK, dispatch, params);
    })
    .catch((error) => {
      console.log('error-deleteTaskAction: ', error);
      dispatch(isErrorAction(true));
    })
    .finally(() => {
      dispatch(loadingTaskAction(false));
    });
};
