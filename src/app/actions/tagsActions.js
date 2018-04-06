import dataAPI from '../LoadData';
import { uniq, map } from 'lodash';
import { TAG_ALL } from '../constants';

export const LOAD_TAGS_REQUEST = "LOAD_TAGS_REQUEST";
export const LOAD_TAGS_SUCCESS = "LOAD_TAGS_SUCCESS";
export const LOAD_TAGS_FAILURE = "LOAD_TAGS_FAILURE";
export const SELECT_TAG = "SELECT_TAG";

export function loadTagsIfNeed() {
  return (dispatch, getState) => {
    const { isFetched } = getState().newsListInfo;
    if (isFetched) {
      return;
    }

    dispatch({
      type: LOAD_TAGS_REQUEST,
    });

    return dataAPI.getAllNews().then(news => {
      dispatch({
        type: LOAD_TAGS_SUCCESS,
        payload: uniq([].concat([TAG_ALL], ...map(news, 'tags'))),
      })
    }).catch(error => {
      dispatch({
        type: LOAD_TAGS_FAILURE,
        payload: error,
        error: true,
      });
    });
  }
}

export const selectTag = (payload) => ({
  type: SELECT_TAG,
  payload,
});