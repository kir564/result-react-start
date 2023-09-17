import { ACTION } from '../constans';

const initialTasks = [];

export const tasksReducer = (state = initialTasks, action) => {
  switch (action.type) {
    case ACTION.GET_TASKS:
      return [...action.payload.tasks];

    case ACTION.ADD_TASK:
      return [...action.payload.tasks];

    case ACTION.DELETE_TASK:
      return [...action.payload.tasks];

    case ACTION.CHANGE_TASK:
      return [...action.payload.tasks];

    case ACTION.SET_SEARCH_PHRASE:
      return [...action.payload.tasks];

    case ACTION.SET_SORT:
      return [...action.payload.tasks];

    default:
      return state;
  }
};
