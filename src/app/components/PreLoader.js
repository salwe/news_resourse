import React from 'react';
import react from '../img/react.svg';

export const PreLoader = (props) => {
  return (
    <div>
      {props.isShowen && 
        <div className="container text-center py-4">
          <img src={react} className="loading" alt="loading" />
        </div>
      }
    </div>
  );
}