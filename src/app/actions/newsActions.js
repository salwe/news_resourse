import dataAPI from '../LoadData';
import { find } from 'lodash';
import {
  LOAD_ALL_NEWS_REQUEST,
  LOAD_ALL_NEWS_SUCCESS,
  LOAD_NEWS_REQUEST,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
  SET_ACTIVE_NEWS,
} from '../constants/actions';

export function fetchAllNews() {
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

export function fetchNewsByID(newsId) {
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