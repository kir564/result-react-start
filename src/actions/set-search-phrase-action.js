import { ACTION } from "../constans";

export const setSearchPhraseAction = (phrase) => ({
    type: ACTION.SET_SEARCH_PHRASE, payload: phrase
})