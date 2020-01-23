import { createStore, applyMiddleware, compose } from 'redux';
//import devToolsEnhancer from 'remote-redux-devtools';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducers  from '../reducers';

const store = createStore(
  Reducers,
  composeWithDevTools()
);

//const store = createStore(Reducers, devToolsEnhancer());
export default store;