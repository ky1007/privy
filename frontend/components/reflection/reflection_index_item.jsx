import React from 'react';

const ReflectionIndexItem = ({ reflection, handleDelete }) => (
  <article key={reflection.id} className="reflection-item">
    <div className="reflection-item-content">{reflection.body}</div>
    <div className="reflection-item-action">
        <button onClick={handleDelete(reflection.id)} className="unstyled-button"> 
          <i className="fa fa-trash" aria-hidden="true"></i>
        </button>  
    </div>
  </article>
);

export default ReflectionIndexItem;
