import React from 'react';
import { dataAPI } from '../LoadData';
import { PreLoader } from '../components/PreLoader';
import TagList from '../components/TagList';

class News extends React.Component {
  state = {
    news: null,
    isWaiting: true,
  }

  componentDidMount() {
    dataAPI.getNewsById(this.props.match.params.pageId).then(res => {
      this.setState({
        news: res,
        isWaiting: false,
      });
    });
  }

  getNewsJSX() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron jumbotron-fluid rounded col-12 my-3">
            <div className="container">
              <h1>{this.state.news.title}</h1>
              <p className="lead">{this.state.news.body}</p>
              <TagList tags={this.state.news.tags} selectedTag={null} onClick={() => {return false;}} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <PreLoader isShowen={this.state.isWaiting}/>

        {!this.state.isWaiting && this.getNewsJSX()}
      </div>
    );
  }
}

export default News;