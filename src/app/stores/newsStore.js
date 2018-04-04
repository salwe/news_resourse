import { observable, action, computed } from 'mobx';
import { uniq, map } from 'lodash';
import dataAPI from '../LoadData';

class NewsStore {
  TAG_ALL = "All";

  @observable newsList = [];
  @observable tagsList = [];
  @observable isFetched = false;
  @observable selectedTag = this.TAG_ALL;

  @action('Load news data')
  fetchNews() {
    dataAPI.getAllNews().then(news => {
      this.newsList = news;
      this.tagsList = uniq([].concat([this.TAG_ALL], ...map(news, 'tags')));
      this.isFetched = true;
    });
  }

  @action('Select tag')
  selectTag = (tag) => {
    this.selectedTag = tag;
  }

  @computed get getFiltredNews() {
    return (this.selectedTag === this.TAG_ALL) ? this.newsList : this.newsList.filter(news => news.tags.includes(this.selectedTag));
  }
}

const newsStore = new NewsStore();

export default newsStore;

export { NewsStore };