import React from 'react';
import { selectTag} from '../actions/newsActions';
import { connect } from 'react-redux';

const TagList = (props) => {
	const tags = props.tags.map((tag, i) => 
		<button key={i}
      className={`btn${((props.selectedTag === tag) ? " active" : "")}`}
      type="button"
      onClick={() => props.selectTag(tag)}>
      {tag}
		</button>
	);

	return (
		<div className="container my-3">
			<div className="row">
				<div className="btn-toolbar">
					{tags}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
  return {
    selectedTag: state.selectedTag,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTag: (tag) => {
      dispatch(selectTag(tag));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TagList);

//export default TagList;