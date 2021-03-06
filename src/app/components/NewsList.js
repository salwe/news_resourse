import React from 'react';
import { Link } from 'react-router-dom';
import { URL_ALL_NEWS } from '../constants/urls';

const NewsList = (props) => {
  const news = props.newsList.map((el) => 
    <div key={el.id} className="jumbotron jumbotron-fluid rounded col-12 mb-3 py-3">
      <div className="container">
        <h4>{el.title}</h4>
        <Link to={`${URL_ALL_NEWS}/${el.id}`}>Read more</Link>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        {news}
      </div>
    </div>
  );
}

export default NewsList;