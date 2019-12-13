import { createStore, applyMiddleware, compose } from 'redux';
//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';


//import mySaga from '../../saga';

import Reducers  from '../reducers';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, composeWithDevTools());

//const store = createStore(Reducers, devToolsEnhancer());

// then run the saga
// sagaMiddleware.run(mySaga);


export default store;