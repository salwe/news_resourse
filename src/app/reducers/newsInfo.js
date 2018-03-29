import { GET_NEWS_REQUEST, GET_NEWS_SUCCESS } from "../actions/index";

const initialState = {
  newsList: [],
  isFetched: false,
};

export const newsInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS_REQUEST:
      return {
        ...state,
        isFetched: false,
      };

    case GET_NEWS_SUCCESS:
      return {
        ...state,
        newsList: [...action.newsList],
        isFetched: true,
      };

    default:
      return state;
  }
};