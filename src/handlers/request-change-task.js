import { BASE_URL } from '../constants';

export const requestChangeTask = ({
  event,
  taskForChange,
  value,
  setRefreshTodosFlag,
  refreshTodosFlag,
  setIsChangingTask,
}) => {
  event.preventDefault();
  setRefreshTodosFlag(!refreshTodosFlag);
  setIsChangingTask(false);

  fetch(`${BASE_URL}/${taskForChange.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: value,
      comleted: false,
    }),
  }).catch((error) => console.log('error - PUT', error));
};
