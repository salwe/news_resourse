import { combineReducers } from 'redux';
import { newsList } from './newsList';
import { tagsInfo } from './tagsInfo';
 
export const rootReducers = combineReducers({
  newsList,
  tagsInfo,
});