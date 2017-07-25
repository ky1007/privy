import React from 'react';
import { Link } from 'react-router-dom';

const EntryIndexItem = ({ entry }) => (
  <main className="entry-list-items">
    <Link to={`/me/entries/${entry.id}`}>
      <article key={entry.id}>{entry.general.slice(0, 120) + '...'}</article>
    </Link>
  </main>
);

export default EntryIndexItem;
