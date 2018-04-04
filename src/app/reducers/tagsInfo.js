import { LOAD_TAGS_REQUEST, LOAD_TAGS_SUCCESS, SELECT_TAG } from "../actions/tagsActions";
import { TAG_ALL } from '../constants';

const initialState = {
  selectedTag: TAG_ALL,
  tagsList: [],
  isFetched: false,
};

export const tagsInfo = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TAGS_REQUEST:
      return {
        ...state,
        isFetched: false,
      };

    case LOAD_TAGS_SUCCESS:
      return {
        ...state,
        tagsList: [...action.payload],
        isFetched: true,
      };

    case SELECT_TAG:
      return {
        ...state,
        selectedTag: action.payload,
      };

  default:
    return state;
  }
};