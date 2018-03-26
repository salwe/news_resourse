export const ADD_ALL_NEWS = "ADD_ALL_NEWS";
export const ADD_NEWS = "ADD_NEWS";
export const ADD_ALL_TAGS = "ADD_ALL_TAGS";
export const SELECT_TAG = "SELECT_TAG";

export const addAllNews = (newsList) => ({
  type: ADD_ALL_NEWS,
  newsList,
});

export const addNews = (news) => ({
  type: ADD_NEWS,
  news,
});

export const addAllTags = (tagsList) => ({
  type: ADD_ALL_TAGS,
  tagsList,
});

export const selectTag = (tag) => ({
  type: SELECT_TAG,
  tag,
});