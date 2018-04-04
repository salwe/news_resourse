import dataAPI from '../LoadData';

export const LOAD_ALL_NEWS_REQUEST = "LOAD_ALL_NEWS_REQUEST";
export const LOAD_ALL_NEWS_SUCCESS = "LOAD_ALL_NEWS_SUCCESS";

export const LOAD_NEWS_REQUEST = "LOAD_NEWS_REQUEST";
export const LOAD_NEWS_SUCCESS = "LOAD_NEWS_SUCCESS";
export const LOAD_NEWS_ERROR = "LOAD_NEWS_ERROR";
export const SET_ACTIVE_NEWS = "SET_ACTIVE_NEWS";

export function loadAllNews() {
  return (dispatch) => {
    dispatch({
      type: LOAD_ALL_NEWS_REQUEST,
    });

    dataAPI.getAllNews()
      .then(news => {
        dispatch({
          type: LOAD_ALL_NEWS_SUCCESS,
          payload: news,
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_NEWS_ERROR,
          payload: error,
          error: true,
        });
      });
  }
}

export function loadNewsById(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_NEWS_REQUEST,
    });

    dataAPI.getNewsById(id)
      .then(news => {
        dispatch({
          type: LOAD_NEWS_SUCCESS,
          payload: news,
        });
      })
      .catch(error => {
        dispatch({
          type: LOAD_NEWS_ERROR,
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