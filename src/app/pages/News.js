import React from 'react';
import _ from 'lodash';
import { dataAPI } from '../LoadData';
import { PreLoader } from '../components/PreLoader';

class News extends React.Component {
  newsFromStore = this.getNewsFromStore();

  state = {
    news: this.newsFromStore,
    isLoaded: Boolean(this.newsFromStore),
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

  getNewsFromStore() {
    const newsId = parseInt(this.props.match.params.pageId, 10);

    return _.find(this.props.newsList, news => news.id === newsId);
  }

  getNewsJSX() {
    const news = this.state.news;
    
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