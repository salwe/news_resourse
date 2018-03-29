import { GET_TAGS_REQUEST, GET_TAGS_SUCCESS, SELECT_TAG } from "../actions/index";
import { TAG_ALL } from '../constants';

const initialState = {
  selectedTag: TAG_ALL,
  tagsList: [],
  isFetched: false,
};

export const tagsInfo = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAGS_REQUEST:
      return {
        ...state,
        isFetched: false,
      };

    case GET_TAGS_SUCCESS:
      return {
        ...state,
        tagsList: [...action.tagsList],
        isFetched: true,
      };

    case SELECT_TAG:
      return {
        ...state,
        selectedTag: action.tag,
      };

  default:
    return state;
  }
};