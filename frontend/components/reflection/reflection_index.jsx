import React from 'react';

const ReflectionIndexItem = ({ reflection, handleDelete }) => (
  <article key={reflection.id}>
    {reflection.body}
    <button onClick={handleDelete} value={reflection.id}>delete</button>
  </article>
);

export default ReflectionIndexItem;
