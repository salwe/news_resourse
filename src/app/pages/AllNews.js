import React from 'react';
import _ from 'lodash';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import { PreLoader } from '../components/PreLoader';
import { TAG_ALL } from '../constants';
import { dataAPI } from '../LoadData';

class AllNews extends React.Component {
  state = {
    tagsArr: [],
    isLoaded: (this.props.newsList.length > 0),
  };

  componentDidMount() {
    if (!this.state.isLoaded) {
      dataAPI.getAllNews().then(news => {
        this.props.addAllNews(news);
        this.props.addAllTags(_.uniq([].concat([TAG_ALL], ..._.map(news, 'tags'))));

        this.setState({
          isLoaded: true,
        });
      });
    }
  }

  selectTag = (tag) => {
    this.props.selectTag(tag);
  }

  getFilteredNews() {
    const { newsList, tagsInfo } = this.props;
    return (tagsInfo.selectedTag === TAG_ALL) ? newsList : newsList.filter(news => news.tags.includes(tagsInfo.selectedTag));
  }

  render() {
    return (
      <div>
        <PreLoader isShown={!this.state.isLoaded} />
        <TagList tags={this.props.tagsInfo.tagsList} selectedTag={this.props.tagsInfo.selectedTag} onClick={this.selectTag} />
        <NewsList newsList={this.getFilteredNews()} />
      </div>
    );
  }
}

export default AllNews;