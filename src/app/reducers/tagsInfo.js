import { ADD_ALL_TAGS, SELECT_TAG } from "../actions/index";
import { TAG_ALL } from '../constants';

const initialState = {
  selectedTag: TAG_ALL,
  tagsList: [],
};

export const tagsInfo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ALL_TAGS:
      return {
        selectedTag: state.selectedTag,
        tagsList: [...action.tagsList],
      };

    case SELECT_TAG:
      return {
        selectedTag: action.tag,
        tagsList: state.tagsList,
      };

  default:
    return state;
  }
};