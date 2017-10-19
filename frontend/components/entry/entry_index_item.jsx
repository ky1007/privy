import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const writerInfo = (entry, destroyFollow, createFollow, writers) => {
  const handleFollow = (followAction) => {
    const followRequest = {
      followee_id: entry.writer_id,
    };
    return () => followAction(followRequest);
  };

  const { following } = writers[entry.writer_id];
  const followAction = following ? destroyFollow : createFollow;

  return (
    <div>
      {writers[entry.writer_id].country ? <div><small className="country">{writers[entry.writer_id].country}</small><br /></div> : null }
      {writers[entry.writer_id].race ? <div><small className="race">{writers[entry.writer_id].race}</small><br /></div> : null }
      {writers[entry.writer_id].age ? <div><small className="age">{writers[entry.writer_id].age}</small><br /></div> : null }
      <div className="follows" onClick={handleFollow(followAction)}><i className="fa fa-user-plus" aria-hidden="true" /> {following ? 'unfollow' : 'follow' }</div>
    </div>
  );
};

const EntryIndexItem = ({ entry, pathUsername, currentUser, createFollow, destroyFollow, writers }) => (
  <div className="entry-index-container">
    <aside className="entry-index-metadata">
      {pathUsername ? null : <h3><Link to={`/${writers[entry.writer_id].username}/entries`}>{writers[entry.writer_id].username}</Link></h3> }
      <small>{moment(entry.created_at).fromNow()}</small><br /><br />
      {pathUsername ? null : writerInfo(entry, createFollow, destroyFollow, writers)}
    </aside>
    <main className="entry-list-items">
      <Link to={`/entries/${entry.id}`}>
        <article key={entry.id}>{entry.general.slice(0, 290) + '...'}</article>
      </Link>
    </main>
    <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
  </div>
);

export default EntryIndexItem;
