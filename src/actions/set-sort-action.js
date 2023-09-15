import { ACTION, BASE_URL, PATH } from '../constans';
import { getTasksRequest } from '../utils';

export const setSortAction = () => ({
  type: ACTION.SET_SORT,
});

// const sortAction = () => (dispatch) => {
//   fetch('')
//     .then((r) => r.json())
//     .then((data) => {
//       dispatch({
//         type: ACTION.SET_SORT,
//         payload: {
//           tasks: [...data],
//           params: {
//             sort_by: 'title',
//           },
//         },
//       });
//     });
// };

export const sortAc = (sortParams) => (dispatch) => {
  // getTasksRequest(ACTION.SET_SORT, dispatch)
  //   dispatch({ type: ACTION.SET_SORT });
  const url = new URL(PATH.TASKS, BASE_URL);
  url.searchParams.set('_sort', sortParams);

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: ACTION.SET_SORT,
        payload: { tasks: [...data], sortParams: sortParams },
      });
    });
};
