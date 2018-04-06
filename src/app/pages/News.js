import React from 'react';
import { connect } from 'react-redux';
import { PreLoader } from '../components/PreLoader';
import { loadNewsById } from '../actions/newsActions';

class News extends React.Component {
  componentDidMount() {
    const newsId = parseInt(this.props.match.params.pageId, 10);
    this.props.loadNewsById(newsId);
  }

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

const mapStateToProps = (state) => {
  return {
    isNewsListFetched: state.newsListInfo.isFetched,
    activeNewsInfo: state.activeNewsInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNewsById: (newsId) => {
      dispatch(loadNewsById(newsId));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(News);