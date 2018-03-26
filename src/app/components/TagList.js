import React from 'react';

const TagList = (props) => {
	const tags = props.tags.map((tag, i) => 
		<button key={i}
      className={`btn${((props.selectedTag === tag) ? " active" : "")}`}
      type="button"
      onClick={() => props.onClick(tag)}>
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

export default TagList;