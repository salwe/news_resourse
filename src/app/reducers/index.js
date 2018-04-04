import { combineReducers } from 'redux';
import { newsListInfo } from './newsListInfo';
import { activeNewsInfo } from './activeNewsInfo';
import { tagsInfo } from './tagsInfo';
 
export const rootReducers = combineReducers({
  newsListInfo,
  activeNewsInfo,
  tagsInfo,
});