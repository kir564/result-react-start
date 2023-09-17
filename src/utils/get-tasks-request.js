import { isErrorAction } from '../actions';
import { loadingTasksAction } from '../actions';
import { BASE_URL, MAX_TIME_LOADING, PATH } from '../constans';

export const getTasksRequest = (type, dispatch, params) => {
  const { sort_by, search_phrase } = params;

  const url = new URL(PATH.TASKS, BASE_URL);
  url.searchParams.set('_sort', sort_by ? 'title' : 'id');
  url.searchParams.set('title_like', search_phrase);

  dispatch(loadingTasksAction(true));
  let isLoadingTimeout = false;

  const timerId = setTimeout(() => {
    isLoadingTimeout = true;
  }, MAX_TIME_LOADING);

  fetch(url)
    .then((response) => {
      if (isLoadingTimeout) {
        throw new Error();
      }

      clearTimeout(timerId);
      return response.json();
    })
    .then((tasksData) => {
      dispatch({
        type: type,
        payload: {
          tasks: [...tasksData],
          params: { ...params },
        },
      });
    })
    .catch((error) => {
      console.log('error-getTasksRequest: ', error);
      dispatch(isErrorAction(true));
    })
    .finally(() => {
      dispatch(loadingTasksAction(false));
    });
};
