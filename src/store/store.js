import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { AppReducer } from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(AppReducer, composeEnhancers(applyMiddleware(thunk)));
