import { ADD_NEWS, REMOVE_NEWS, SELECT_TAG } from "../actions/newsActions";
import { TAG_ALL } from '../constants';

const initialState = {
  selectedTag: TAG_ALL,
  newsList: [],
}

export const newsList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWS:
      //console.log(state);
      return {
        selectedTag: TAG_ALL,
        newsList: [...state.newsList,
        {
          id: action.id,
          ...action.data
        }],
      };

    case REMOVE_NEWS:
      return state.newsList.filter(news => news.id !== action.id);

    case SELECT_TAG:
      return {
        selectedTag: action.tag,
        newsList: [...state.newsList],
      };

    default:
      return state;
  }
};