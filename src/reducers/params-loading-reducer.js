import { ACTION } from '../constans';

const initialParamsLoading = {
  isTasks: false,
  isTask: false,
  isError: false,
};

export const paramsLoadingReducer = (state = initialParamsLoading, action) => {
  switch (action.type) {
    case ACTION.IS_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    case ACTION.IS_LOADING_TASKS:
      return {
        ...state,
        isTasks: action.payload,
      };
    case ACTION.IS_LOADING_TASK:
      return {
        ...state,
        isTask: action.payload,
      };
    default:
      return state;
  }
};
