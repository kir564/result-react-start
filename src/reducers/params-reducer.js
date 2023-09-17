import { ACTION } from '../constans';

const initialParams = {
  sort_by: false,
  search_phrase: '',
};

export const paramsReducer = (state = initialParams, action) => {
  switch (action.type) {
    case ACTION.SET_SORT:
      return {
        ...state,
        sort_by: action.payload.params.sort_by,
      };

    case ACTION.SET_SEARCH_PHRASE:
      return {
        ...state,
        search_phrase: action.payload.params.search_phrase,
      };
    default:
      return state;
  }
};
