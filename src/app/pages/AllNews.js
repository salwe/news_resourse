import React from 'react';
import _ from 'lodash';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import { PreLoader } from '../components/PreLoader';
import { TAG_ALL } from '../constants';
import { dataAPI } from '../LoadData';

class AllNews extends React.Component {
  state = {
    newsArr: [],
    tagsArr: [],
    selectedTag: TAG_ALL,
    isWaiting: true,
  };

  componentDidMount() {
    dataAPI.getAllNews().then(res => {
      this.setState({
        newsArr: res,
        tagsArr: _.uniq([].concat([TAG_ALL], ..._.map(res, 'tags'))),
        isWaiting: false,
      });
    });
  }

  selectTag = (tag) => {    
    this.setState({
      selectedTag: tag,
    });
  }

  getFilteredNews() {
    return (this.state.selectedTag === TAG_ALL) ? this.state.newsArr : this.state.newsArr.filter(news => news.tags.includes(this.state.selectedTag));
  }

  render() {
    return (
      <div>
        <PreLoader isShowen={this.state.isWaiting}/>
        
        <TagList tags={this.state.tagsArr} selectedTag={this.state.selectedTag} onClick={this.selectTag} />
        <NewsList newsList={this.getFilteredNews()} />
      </div>
    );
  }
}

export default AllNews;