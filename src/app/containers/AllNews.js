import { addAllNews, addAllTags, selectTag } from '../actions/index';
import { connect } from 'react-redux';
import AllNews from '../pages/AllNews';

const mapStateToProps = (state) => {
  return {
    newsList: state.newsList,
    tagsInfo: state.tagsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addAllNews: (news) => {
      dispatch(addAllNews(news));
    },

    addAllTags: (tagsList) => {
      dispatch(addAllTags(tagsList));
    },

    selectTag: (tag) => {
      dispatch(selectTag(tag));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);