import React from 'react';
import moment from 'moment';

const ReflectionIndexItem = ({ reflection, handleDelete, entryCreatedAt }) => {
  const entryDate = moment(entryCreatedAt);
  const reflectionDate = moment(reflection.created_at);
  const timeElapsed = moment.duration(reflectionDate.diff(entryDate));
  const hours = parseInt(timeElapsed.asHours());

  return (
    <article key={reflection.id} className="reflection-item">
      <div className="reflection-time">{reflection.writer_pseudonym} reflected {hours} hours later</div>
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
