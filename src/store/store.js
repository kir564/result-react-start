import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer, paramsReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  tasks: tasksReducer,
  params: paramsReducer,
});

export const store = legacy_createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
  );

// export const store = legacy_createStore(reducer, applyMiddleware(thunk));
// console.log('store: ', store.getState());
