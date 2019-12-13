import { clickReducer } from './clickReducer';
import { currentUser } from './currentUser';
import { counter } from './counter';

import { combineReducers } from 'redux';

const Reducers = combineReducers({
  clickReducer,
  counter,
  currentUser
});

export  default Reducers;