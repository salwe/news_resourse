export const ADD_NEWS = "ADD_NEWS";
export const REMOVE_NEWS = "REMOVE_NEWS";
export const SELECT_TAG = "SELECT_TAG";
let newsId = 0;

export const addNews = (data) => ({
  type: ADD_NEWS,
  id: newsId++,
  data,
});

export const removeNews = (id) => ({
  type: REMOVE_NEWS,
  id,
});

export const selectTag = (tag) => ({
  type: SELECT_TAG,
  tag,
});