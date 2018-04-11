import { LOAD_ALL_NEWS_REQUEST, LOAD_ALL_NEWS_SUCCESS } from "../constants/actions";

const initialState = {
  newsList: [],
  isFetched: false,
};

export const newsListInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ALL_NEWS_REQUEST:
      return {
        ...state,
        isFetched: false,
      };

    case LOAD_ALL_NEWS_SUCCESS:
      return {
        ...state,
        newsList: [...action.payload],
        isFetched: true,
      };

    default:
      return state;
  }
};