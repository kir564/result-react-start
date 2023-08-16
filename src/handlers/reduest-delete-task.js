import { BASE_URL } from '../constants';

export const requestDeleteTask = ({
  id,
  refreshTodosFlag,
  setRefreshTodosFlag,
}) => {
  setRefreshTodosFlag(!refreshTodosFlag);

  fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
  }).catch((error) => console.log('error - DELETE', error));
};
