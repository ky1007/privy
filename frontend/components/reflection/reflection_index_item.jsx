import React from 'react';
import moment from 'moment';
import { parseElapsedTime } from '../../util/helpers';

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
  const minutes = parseInt(timeElapsed.asMinutes());
  const dynamicTimeElapsed = parseElapsedTime(minutes);

  return (
    <article key={reflection.id} className="reflection-item">
      <div className="reflection-time">{dynamicTimeElapsed} later after writing this entry, {reflection.writer_pseudonym} wrote:</div>
      <div className="reflection-item-content">{reflection.body}</div>
      <div className="reflection-item-action">
          {showReflectionDelete(currentUser, reflection, handleDelete)}
      </div>
    </article>
  );
};

export default ReflectionIndexItem;
