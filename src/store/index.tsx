import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './reducers/root-reducer';
// import { apiMiddleWare } from "../services";
import thunk from 'redux-thunk';

const middlewares = [thunk, logger];

let composeEnhancer = compose;
if (__DEV__) {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export const store = createStore(
  rootReducer,
  {},
  composeEnhancer(applyMiddleware(...middlewares)),
);
