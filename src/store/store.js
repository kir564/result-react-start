import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { tasksReducer, paramsReducer, paramsLoadingReducer } from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  tasks: tasksReducer,
  params: paramsReducer,
  params_loading: paramsLoadingReducer
});

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
