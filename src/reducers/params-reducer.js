import { ACTION, SORT_BY } from "../constans"

const initialParams = {
    sort_by: false,
    search_phrase: ''
}

export const paramsReducer = (state = initialParams, action) => {
    // console.log('action-paramsReducer: ', action);
    switch (action.type) {
        case  ACTION.SET_SORT:

            return {
                ...state,
                sort_by: !state.sort_by
            }

        case ACTION.SET_SEARCH_PHRASE:
            return {
                ...state,
                search_phrase: action.payload
            }
        default:
            return state
    }
}