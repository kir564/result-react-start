import { ACTION } from '../constans';

const initialTasks = [];

export const tasksReducer = (state = initialTasks, action) => {
  // console.log('action-tasksReducer: ', action);
  switch (action.type) {
    case ACTION.GET_TASKS:
      return [...action.payload];

    case ACTION.ADD_TASK:
      return [...action.payload];

    case ACTION.DELETE_TASK:
      return [...action.payload];

    case ACTION.CHANGE_TASK:
      return [...action.payload];

    
    
      // case ACTION.SET_SORT:
      // console.log('action-tasksReducer: ', action);
      // return [...action.payload]

    default:
      return state;
  }
};
