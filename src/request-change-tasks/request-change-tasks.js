import { ACTION, BASE_URL, PATH } from '../constants';

const getParams = (method, title) => ({
  method: method,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  body: JSON.stringify({
    title: title,
  }),
});

export const requestChangeTasks = ({
  action,
  updateFlag,
  id = '',
  title,
  setIsLoadAction,
  navigate,
}) => {
  const url = `${BASE_URL.TASKS}/${id}`;
  let params = {};
  
  setIsLoadAction(true);

  const { isUpdatedFlag, setIsUpdatedFlag } = updateFlag;

  if (action === ACTION.ADD) {
    params = getParams('POST', title);
  }

  if (action === ACTION.CHANGE) {
    params = getParams('PUT', title);
  }

  if (action === ACTION.DELETE) {
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
