import React from 'react';
import moment from 'moment';

const showReflectionDelete = (currentUser, reflection, handleDelete) => {
  if (currentUser.id === reflection.writer_id) {
    return (
      <button onClick={handleDelete(reflection.id)} className="trash-button"> 
        <i className="fa fa-trash" aria-hidden="true"></i>
      </button> 
    );
  }
  return (<div />);
};

const ReflectionIndexItem = ({ reflection, handleDelete, entryCreatedAt, currentUser }) => {
  const entryDate = moment(entryCreatedAt);
  const reflectionDate = moment(reflection.created_at);
  const timeElapsed = moment.duration(reflectionDate.diff(entryDate));
  const hours = parseInt(timeElapsed.asHours());

  return (
    <article key={reflection.id} className="reflection-item">
      <div className="reflection-time">{reflection.writer_pseudonym} reflected {hours} hours later after writing this post</div>
      <div className="reflection-item-content">{reflection.body}</div>
      <div className="reflection-item-action">
          {showReflectionDelete(currentUser, reflection, handleDelete)}
      </div>
    </article>
  );
};

export default ReflectionIndexItem;


