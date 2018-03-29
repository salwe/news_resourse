import React from 'react';
import { connect } from 'react-redux';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import { PreLoader } from '../components/PreLoader';
import { TAG_ALL } from '../constants';
import { getNews, getTags, selectTag } from '../actions/index';

class AllNews extends React.Component {
  componentDidMount() {
    if (!this.props.newsInfo.isFetched) this.props.getNews();
    if (!this.props.tagsInfo.isFetched) this.props.getTags();
  }

  selectTag = (tag) => {
    this.props.selectTag(tag);
  }

  getFilteredNews() {
    const { newsInfo, tagsInfo } = this.props;
    
    return (tagsInfo.selectedTag === TAG_ALL) ? newsInfo.newsList : newsInfo.newsList.filter(news => news.tags.includes(tagsInfo.selectedTag));
  }

  render() {
    const isLoaded = this.props.newsInfo.isFetched && this.props.tagsInfo.isFetched;
    
    return (
      <div>
        <PreLoader isShown={!isLoaded} />
        <TagList tags={this.props.tagsInfo.tagsList} selectedTag={this.props.tagsInfo.selectedTag} onClick={this.selectTag} />
        <NewsList newsList={this.getFilteredNews()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsInfo: state.newsInfo,
    tagsInfo: state.tagsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getNews: (news) => {
      dispatch(getNews(news));
    },

    getTags: (tagsList) => {
      dispatch(getTags(tagsList));
    },

    selectTag: (tag) => {
      dispatch(selectTag(tag));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);