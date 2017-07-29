import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const EntryIndexItem = ({ entry, pathUsername, currentUser }) => (
  <div className="entry-index-container">
    <aside className="entry-index-metadata">
      {pathUsername ? null : <h3><Link to={`/${entry.writer_pseudonym}/entries`}>{entry.writer_pseudonym}</Link></h3> }
      <small>{moment(entry.created_at).fromNow()}</small>
    </aside>
    <main className="entry-list-items">
      <Link to={`/entries/${entry.id}`}>
        <article key={entry.id}>{entry.general.slice(0, 190) + '...'}</article>
      </Link>
    </main>
  </div>
);

export default EntryIndexItem;
