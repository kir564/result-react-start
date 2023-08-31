import { ACTION, BASE_URL, PATH } from '../constans';

export const requestChangeTasks = (
  action,
  task,
  setUpdateFlag,
  setIsLoading
) => {
  const url = new URL(BASE_URL);
  let params = {};
  setIsLoading(true);

  const getParams = (method) => ({
    method: method,
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      ...task,
    }),
  });

  switch (action) {
    case ACTION.ADD:
      url.pathname = PATH.TASKS;
      params = getParams('POST');
      break;

    case ACTION.CHANGE:
      url.pathname = PATH.TASKS + task.id;
      params = getParams('PUT');
      break;

    case ACTION.DELETE:
      url.pathname = PATH.TASKS + task.id;
      params = {
        method: 'DELETE',
      };
      break;

    default:
      break;
  }

  fetch(url, params)
    .then(() => {
      setUpdateFlag((prev) => !prev);
      setIsLoading(false);
    })
    .catch((err) => console.log(err));
};
