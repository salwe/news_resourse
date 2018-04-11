import React from 'react';
import { connect } from 'react-redux';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import { PreLoader } from '../components/PreLoader';
import { TAG_ALL } from '../constants/tags';
import { fetchAllNews } from '../actions/newsActions';
import { loadTagsIfNeed, selectTag } from '../actions/tagsActions';

class AllNews extends React.Component {
  componentDidMount() {
    this.props.fetchAllNews();
    this.props.loadTagsIfNeed();
  }

  selectTag = (tag) => {
    this.props.selectTag(tag);
  }

  getFilteredNews() {
    const { newsInfo, tagsInfo } = this.props;
    
    return tagsInfo.selectedTag === TAG_ALL ? newsInfo.newsList : newsInfo.newsList.filter(news => news.tags.includes(tagsInfo.selectedTag));
  }

  render() {
    const { tagsInfo, newsInfo } = this.props;
    const isLoaded = newsInfo.isFetched && tagsInfo.isFetched;
    
    return (
      <div>
        <PreLoader isShown={!isLoaded} />
        <TagList tags={tagsInfo.tagsList} selectedTag={tagsInfo.selectedTag} onClick={this.selectTag} />
        <NewsList newsList={this.getFilteredNews()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsInfo: state.newsListInfo,
    tagsInfo: state.tagsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNews: () => {
      dispatch(fetchAllNews());
    },

    loadTagsIfNeed: () => {
      dispatch(loadTagsIfNeed());
    },

    selectTag: (tag) => {
      dispatch(selectTag(tag));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);