import React from 'react';
import { find } from 'lodash';
import { observer } from "mobx-react";
import newsStore from '../stores/newsStore';
import dataAPI from '../LoadData';
import { PreLoader } from '../components/PreLoader';

@observer class News extends React.Component {
  state = {
    news: this.getNewsFromProps() || null,
    isLoaded: newsStore.isFetched,
  }

  componentDidMount() {
    if (!this.state.isLoaded) {
      dataAPI.getNewsById(this.props.match.params.pageId).then(news => {
        this.setState({
          news,
          isLoaded: true,
        });
      });
    }
  }

  getNewsFromProps() {
    const newsId = parseInt(this.props.match.params.pageId, 10);
    
    return find(newsStore.newsList, news => news.id === newsId);
  }

  getNewsJSX() {
    const { news } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron jumbotron-fluid rounded col-12 my-3">
            <div className="container">
              <h1>{news.title}</h1>
              <p className="lead">{news.body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <PreLoader isShown={!this.state.isLoaded}/>
        {this.state.isLoaded && this.getNewsJSX()}
      </div>
    );
  }
}

export default News;