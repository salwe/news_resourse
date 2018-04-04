import dataAPI from '../LoadData';
import { uniq, map } from 'lodash';
import { TAG_ALL } from '../constants';

export const LOAD_TAGS_REQUEST = "LOAD_TAGS_REQUEST";
export const LOAD_TAGS_SUCCESS = "LOAD_TAGS_SUCCESS";
export const LOAD_TAGS_ERROR = "LOAD_TAGS_ERROR";
export const SELECT_TAG = "SELECT_TAG";

export function loadTags() {
  return (dispatch) => {
    dispatch({
      type: LOAD_TAGS_REQUEST,
    });

    dataAPI.getAllNews()
      .then(news => {
        dispatch({
          type: LOAD_TAGS_SUCCESS,
          payload: uniq([].concat([TAG_ALL], ...map(news, 'tags'))),
        })
      })
      .catch(error => {
        dispatch({
          type: LOAD_TAGS_ERROR,
          payload: error,
          error: true,
        });
      })
    ;
  }
}

export const selectTag = (payload) => ({
  type: SELECT_TAG,
  payload,
});