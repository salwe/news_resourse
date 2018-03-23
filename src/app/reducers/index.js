import { combineReducers } from 'redux';
import { newsList } from './newsList';
import { filter } from './filter';
 
export const rootReducers = combineReducers({
  newsList,
  filter
});