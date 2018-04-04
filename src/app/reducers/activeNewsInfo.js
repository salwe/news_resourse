import { LOAD_NEWS_REQUEST, LOAD_NEWS_SUCCESS, SET_ACTIVE_NEWS } from "../actions/newsActions";

const initialState = {
  activeNews: null,
  isFetched: false,
};

export const activeNewsInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEWS_REQUEST:
      return {
        ...state,
        isFetched: false,
      };

    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        activeNews: {...action.payload},
        isFetched: true,
      };

    case SET_ACTIVE_NEWS:
      return {
        ...state,
        activeNews: {...action.payload},
        isFetched: true,
      };

    default:
      return state;
  }
};