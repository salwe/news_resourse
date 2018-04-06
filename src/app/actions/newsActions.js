import dataAPI from '../LoadData';
import { find } from 'lodash';

export const LOAD_ALL_NEWS_REQUEST = "LOAD_ALL_NEWS_REQUEST";
export const LOAD_ALL_NEWS_SUCCESS = "LOAD_ALL_NEWS_SUCCESS";

export const LOAD_NEWS_REQUEST = "LOAD_NEWS_REQUEST";
export const LOAD_NEWS_SUCCESS = "LOAD_NEWS_SUCCESS";
export const LOAD_NEWS_FAILURE = "LOAD_NEWS_FAILURE";
export const SET_ACTIVE_NEWS = "SET_ACTIVE_NEWS";

export function loadAllNewsIfNeed() {
  return (dispatch, getState) => {
    const { isFetched } = getState().newsListInfo;
    
    if (isFetched) {
      return;
    }

    dispatch({
      type: LOAD_ALL_NEWS_REQUEST,
    });

    return dataAPI.getAllNews().then(news => {
      dispatch({
        type: LOAD_ALL_NEWS_SUCCESS,
        payload: news,
      });
    }).catch(error => {
      dispatch({
        type: LOAD_NEWS_FAILURE,
        payload: error,
        error: true,
      });
    });
  }
}

export function loadNewsById(newsId) {
  return (dispatch, getState) => {
    const { isFetched, newsList } = getState().newsListInfo;

    if (isFetched) {
      const news = find(newsList, news => news.id === newsId);
      dispatch(setActiveNews(news));
      return;
    }

    dispatch({
      type: LOAD_NEWS_REQUEST,
    });

    return dataAPI.getNewsById(newsId).then(news => {
      dispatch({
        type: LOAD_NEWS_SUCCESS,
        payload: news,
      });
    }).catch(error => {
      dispatch({
        type: LOAD_NEWS_FAILURE,
        payload: error,
        error: true,
      });
    });
  }
}

export const setActiveNews = (payload) => ({
  type: SET_ACTIVE_NEWS,
  payload,
});