import {combineReducers} from 'redux';
import {reducer} from '../reducer/index';
export const combine = combineReducers({
  redu1: reducer,
});
