import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import weather from './whether';

export default combineReducers({ counterReducer, weather });
