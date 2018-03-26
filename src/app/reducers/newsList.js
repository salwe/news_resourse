import { ADD_ALL_NEWS, ADD_NEWS } from "../actions/index";

export const newsList = (state = [], action) => {
  switch (action.type) {
    case ADD_ALL_NEWS:
      return [ ...action.newsList ];

    case ADD_NEWS:
      return [ ...state.newsList,
        {
          ...action.news
        }];

    default:
      return state;
  }
};