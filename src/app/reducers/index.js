import { combineReducers } from 'redux';
import { newsInfo } from './newsInfo';
import { tagsInfo } from './tagsInfo';
 
export const rootReducers = combineReducers({
  newsInfo,
  tagsInfo,
});