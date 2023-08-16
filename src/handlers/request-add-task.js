import { BASE_URL } from '../constants';

export const requestAddTask = ({
  event,
  refreshTodosFlag,
  setRefreshTodosFlag,
  setNewTask,
  newTask,
}) => {
  event.preventDefault();
  setRefreshTodosFlag(!refreshTodosFlag);
  setNewTask('');

  fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8' },
    body: JSON.stringify({
      title: newTask,
      comleted: false,
    }),
  }).catch((error) => console.log('error - POST', error));
};