import React from 'react';
import moment from 'moment';

const ReflectionIndexItem = ({ reflection, handleDelete }) => {
  const date = moment(reflection.created_at).fromNow();
  
  return (
    <article key={reflection.id} className="reflection-item">
      <div className="reflection-time">{date}</div>
      <div className="reflection-item-content">{reflection.body}</div>
      <div className="reflection-item-action">
          <button onClick={handleDelete(reflection.id)} className="unstyled-button"> 
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>  
      </div>
   </article> 
  );
};

export default ReflectionIndexItem;
