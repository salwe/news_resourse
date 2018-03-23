import React from 'react';
import _ from 'lodash';
import TagList from '../components/TagList';
import NewsList from '../components/NewsList';
import { PreLoader } from '../components/PreLoader';
import { TAG_ALL } from '../constants';
import { dataAPI } from '../LoadData';
import { addNews } from '../actions/newsActions';
import { connect } from 'react-redux';

class AllNews extends React.Component {
  state = {
    tagsArr: [],
    isWaiting: true,
  };

  componentDidMount() {
    dataAPI.getAllNews().then(res => {

      res.forEach(news => this.props.addNews({ ...news }));

      this.setState({
        tagsArr: _.uniq([].concat([TAG_ALL], ..._.map(res, 'tags'))),
        isWaiting: false,
      });
    });
  }

  // selectTag = (tag) => {
  //   this.props.selectTag(tag);
  //   // this.setState({
  //   //   selectedTag: tag,
  //   // });
  // }

  getFilteredNews() {
    return (this.props.selectedTag === TAG_ALL) ? this.props.newsList : this.props.newsList.filter(news => news.tags.includes(this.props.selectedTag));
  }

  render() {
    return (
      <div>
        <PreLoader isShowen={this.state.isWaiting} />
        
        <TagList tags={this.state.tagsArr} />
        <NewsList newsList={this.getFilteredNews()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedTag: state.selectedTag,
    newsList: state.newsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNews: (id) => {
      dispatch(addNews(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AllNews);

//export default AllNews;