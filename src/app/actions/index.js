import dataAPI from '../LoadData';
import { uniq, map } from 'lodash';
import { TAG_ALL } from '../constants';

export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST";
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS";
export const GET_TAGS_REQUEST = "GET_TAGS_REQUEST";
export const GET_TAGS_SUCCESS = "GET_TAGS_SUCCESS";
export const SELECT_TAG = "SELECT_TAG";

export function getNews() {
  return (dispatch) => {
    dispatch({
      type: GET_NEWS_REQUEST,
    });

    dataAPI.getAllNews().then(news => {
      dispatch({
        type: GET_NEWS_SUCCESS,
        newsList: news,
      })
    });
  }
}

export function getTags() {
  return (dispatch) => {
    dispatch({
      type: GET_TAGS_REQUEST,
    });

    dataAPI.getAllNews().then(news => {
      dispatch({
        type: GET_TAGS_SUCCESS,
        tagsList: uniq([].concat([TAG_ALL], ...map(news, 'tags'))),
      })
    });
  }
}

export const selectTag = (tag) => ({
  type: SELECT_TAG,
  tag,
});