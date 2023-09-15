import { BASE_URL, ACTION, PATH } from '../constans';
import { getTasksRequest } from '../utils';

export const changeTaskAction = (task) => (dispatch) => {
  console.log('task: ', task);
  const url = new URL(PATH.TASKS + task.id, BASE_URL);

  fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  }).then(() => {
    getTasksRequest(ACTION.CHANGE_TASK, dispatch);
  });
};
