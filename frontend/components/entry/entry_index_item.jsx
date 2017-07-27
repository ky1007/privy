import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryIndexItem = ({ entry, username }) => (
  <div className="entry-index-container">
    <aside className="entry-index-metadata">
      <h3>{entry.writer_pseudonym}</h3>
      <small>{moment(entry.created_at).fromNow()}</small>
    </aside>
    <main className="entry-list-items">
      <Link to={`/me/entries/${entry.id}`}>
        <article key={entry.id}>{entry.general.slice(0, 190) + '...'}</article>
      </Link>
    </main>
  </div>
);

export default EntryIndexItem;
