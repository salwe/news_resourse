import React from 'react';
import { find } from 'lodash';
import { connect } from 'react-redux';
import dataAPI from '../LoadData';
import { PreLoader } from '../components/PreLoader';

class News extends React.Component {
  state = {
    news: this.getNewsFromProps() || null,
    isLoaded: this.props.isNewsFetched,
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
    
    return find(this.props.newsList, news => news.id === newsId);
  }

  getNewsJSX() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron jumbotron-fluid rounded col-12 my-3">
            <div className="container">
              <h1>{this.state.news.title}</h1>
              <p className="lead">{this.state.news.body}</p>
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

const mapStateToProps = (state) => {
  return {
    newsList: state.newsInfo.newsList,
    isNewsFetched: state.newsInfo.isFetched,
  };
};

export default connect(mapStateToProps)(News);