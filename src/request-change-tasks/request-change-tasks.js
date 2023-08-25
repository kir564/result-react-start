import { ACTION, BASE_URL, PATH } from '../constants';

export const requestChangeTasks = ({
  action,
  updateFlag,
  id,
  title,
  setIsLoadAction,
  navigate,
}) => {
  let url = '';
  let params = {};
  setIsLoadAction(true);

  const { isUpdatedFlag, setIsUpdatedFlag } = updateFlag;

  if (action === ACTION.ADD) {
    url = BASE_URL.TASKS;
    params = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: title,
      }),
    };
  }

  if (action === ACTION.CHANGE) {
    url = `${BASE_URL.TASKS}/${id}`;
    params = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        title: title,
      }),
    };
  }

  if (action === ACTION.DELETE) {
    url = `${BASE_URL.TASKS}/${id}`;
    params = {
      method: 'DELETE',
    };
  }

  fetch(url, params)
    .catch((error) => console.log(error))
    .then(() => setIsUpdatedFlag(!isUpdatedFlag))
    .finally(() => {
      setIsLoadAction(false);
      if (action === ACTION.DELETE) {
        navigate(PATH.TASKS);
      }
    });
};
