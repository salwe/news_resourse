import React from 'react';
import { find } from 'lodash';
import { connect } from 'react-redux';
import { PreLoader } from '../components/PreLoader';
import * as actions from '../actions/newsActions';

class News extends React.Component {
  componentDidMount() {
    if (this.props.isNewsListFetched) {
      this.props.setActiveNews(this.props.newsFromStore);
    }
    else {
      const newsId = parseInt(this.props.match.params.pageId, 10);
      this.props.loadNewsById(newsId);
    }
  }

  // componentWillUnmount() {
  //   this.props.setActiveNews(null);
  // }

  getNewsJSX() {
    const news = this.props.activeNewsInfo.activeNews;

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
    const isLoaded = this.props.activeNewsInfo.isFetched;

    return (
      <div>
        <PreLoader isShown={!isLoaded}/>
        {isLoaded && this.getNewsJSX()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const newsId = parseInt(ownProps.match.params.pageId, 10);
  const newsFromStore = find(state.newsListInfo.newsList, news => news.id === newsId);

  return {
    newsFromStore,
    isNewsListFetched: state.newsListInfo.isFetched,
    activeNewsInfo: state.activeNewsInfo,
  };
};

export default connect(mapStateToProps, actions)(News);