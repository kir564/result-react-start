import { ACTION, BASE_URL, PATH, SORT_BY } from '../constans';
import { store } from '../store/store';
import { useStore } from 'react-redux';

export const getTasksRequest = (type, dispatch) => {
  //   const url = new URL(PATH.TASKS, BASE_URL);

  // console.log('get tasks');

  const {
    params: { sort_by, search_phrase },
  } = store.getState();

  // const {
  //   tasksData: {
  //     params: { sort_by, search_phrase },
  //   },
  // } = store.getState();
  
  
  // console.log('sort_by: ', sort_by);

  const url = new URL(PATH.TASKS, BASE_URL);
  // url.searchParams.set('_sort', sort_by || SORT_BY.DEFAULT);
  url.searchParams.set('_sort', sort_by ? 'title' : 'id');
  //   url.searchParams.set('_order', isSort ? 'asc' : 'desc');
  url.searchParams.set('title_like', search_phrase);

  fetch(url)
    .then((response) => response.json())
    .then((tasksData) => {
      dispatch({
        type: type,
        payload: [...tasksData],
      });
    });
};
