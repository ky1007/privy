import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const writerInfo = entry => (
  <div>
    {entry.writer_info.country ? <div><small className="country">{entry.writer_info.country}</small><br /></div> : null }
    {entry.writer_info.race ? <div><small className="race">{entry.writer_info.race}</small><br /></div> : null }
    {entry.writer_info.age ? <div><small className="age">{entry.writer_info.age}</small><br /></div> : null }
    <div className="follows"><i className="fa fa-user-plus" aria-hidden="true"></i> follow</div>
  </div>
);

const EntryIndexItem = ({ entry, pathUsername, currentUser }) => (
  <div className="entry-index-container">
    <aside className="entry-index-metadata">
      {pathUsername ? null : <h3><Link to={`/${entry.writer_pseudonym}/entries`}>{entry.writer_pseudonym}</Link></h3> }
      <small>{moment(entry.created_at).fromNow()}</small><br /><br />
      {pathUsername ? null : writerInfo(entry)}
    </aside>
    <main className="entry-list-items">
      <Link to={`/entries/${entry.id}`}>
        <article key={entry.id}>{entry.general.slice(0, 290) + '...'}</article>
      </Link>
    </main>
    <i className="fa fa-bookmark-o fa-2x" aria-hidden="true"></i>
  </div>
);

export default EntryIndexItem;
