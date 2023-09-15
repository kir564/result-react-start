import { getTasksAction } from '.';
import { ACTION, BASE_URL, PATH } from '../constans';
import { getTasksRequest } from '../utils';

export const addTaskAction = (task) => (dispatch) => {
  const url = new URL(PATH.TASKS, BASE_URL);

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  }).then(() => {
    getTasksRequest(ACTION.ADD_TASK, dispatch);
  });
};
