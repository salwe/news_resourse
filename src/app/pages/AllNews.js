import React from 'react';
import { observer } from "mobx-react";
import { PreLoader } from '../components/PreLoader';
import newsStore from '../stores/newsStore';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';

@observer class AllNews extends React.Component {
  componentDidMount() {
    newsStore.fetchNews();
  }

  render() {
    const { tagsList, isFetched, selectedTag} = newsStore;

    return (
      <div>
        <PreLoader isShown={!isFetched}/>
        <TagList tags={tagsList} selectedTag={selectedTag} onClick={newsStore.selectTag}/>
        <NewsList newsList={newsStore.getFiltredNews} />
      </div>
    );
  }
}

export default AllNews;