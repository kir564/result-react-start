import { ACTION, BASE_URL, PATH } from '../constans';
import { getTasksRequest } from '../utils';

export const deleteTaskAction = (task) => (dispatch) => {
  const url = new URL(PATH.TASKS + task.id, BASE_URL);

  fetch(url, {
    method: 'DELETE',
  }).then(() => {
    getTasksRequest(ACTION.DELETE_TASK, dispatch);
  });
};
