import { ACTION, BASE_URL } from '../constans';

export const requestChangeTasks = (action, task, setUpdateFlag) => {
  let url = '';
  let params = {};

  const getParams = (method) => ({
    method: method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  });

  switch (action) {
    case ACTION.ADD:
      url = BASE_URL;
      params = getParams('POST');
      break;

    case ACTION.CHANGE:
      url = `${BASE_URL}/${task.id}`;
      params = getParams('PUT');
      break;

    case ACTION.DELETE:
      url = `${BASE_URL}/${task.id}`;
      params = {
        method: 'DELETE',
      };
      break;

    default:
      break;
  }

  fetch(url, params)
    .then(() => setUpdateFlag((prev) => !prev))
    .catch((err) => console.log(err));
};
