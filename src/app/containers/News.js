import { addNews } from '../actions/index';
import { connect } from 'react-redux';
import News from '../pages/News';

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    newsList: state.newsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addNews: (news) => {
      dispatch(addNews(news));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(News);