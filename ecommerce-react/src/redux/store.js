import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger]; // middleware logger, samo logguje sta se nalazi, odnosno sta je izmedju action i root-reducera

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // umseto ...midlewares , moze i logger samo 

export default store;









