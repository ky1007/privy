import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const writerInfo = (entry, createFollow, destroyFollow, writers) => {
  const { following } = writers[entry.writer_id];
  const followAction = following ? destroyFollow : createFollow;

  const handleFollow = (followAction) => {
    const followRequest = {
      followee_id: entry.writer_id,
    };
    return () => followAction(followRequest);
  };

  return (
    <div className="inline author-info">
      <div className="inline author-demographics">
        {writers[entry.writer_id].country ? <div className="author-profile"><small className="country">{writers[entry.writer_id].country}</small></div> : null }
        {writers[entry.writer_id].race ? <div className="author-profile"><small className="race">{writers[entry.writer_id].race}</small></div> : null }
        {writers[entry.writer_id].age ? <div className="author-profile"><small className="age">{writers[entry.writer_id].age}</small></div> : null }
      </div>
      <div onClick={handleFollow(followAction)} role="button">
        <span className="follows">
          <i className={following ? 'fa fa-user-times' : 'fa fa-user-plus'} aria-hidden="true" /> {following ? 'unfollow' : 'follow' }
        </span>
      </div>
    </div>
  );
};

// const displayFollow = (entry, createFollow, destroyFollow, writers) => {
//   const { following } = writers[entry.writer_id];
//   const followAction = following ? destroyFollow : createFollow;

//   const handleFollow = (followAction) => {
//     const followRequest = {
//       followee_id: entry.writer_id,
//     };
//     return () => followAction(followRequest);
//   };
  
//   return (
//     <div onClick={handleFollow(followAction)} role="button">
//       <span className="follows">
//         <i className={following ? 'fa fa-user-times' : 'fa fa-user-plus'} aria-hidden="true" /> {following ? 'unfollow' : 'follow' }
//       </span>
//     </div>
//   );

// };

const entryOptions = (pathUsername, currentUser, entry, destroyEntry) => {
  if (pathUsername === currentUser.username) {
    return (
      <span>
        <Link to={`/entries/${entry.id}/edit`}><i className='fa fa-entry-options fa-pencil-square-o fa-2x'/></Link><br />
        <i className='fa fa-entry-options fa-trash-o fa-2x' onClick={() => destroyEntry(entry.id)}/>
      </span>
    );
  }
  return null;
}

const EntryIndexItem = ({ entry, pathUsername, currentUser, createFollow, destroyFollow, writers, createBookmark, destroyBookmark, destroyEntry }) => {
  const bookmarkAction = entry.bookmarked ? destroyBookmark : createBookmark;
  const handleBookmark = () => {
    const bookmark = {
      entry_id: entry.id,
    };
    return () => bookmarkAction(bookmark);
  };

  return (
    <section className="entry-index-container">

      {/* -- Entry item's author info and follow toggle --  */}
      <aside className="entry-index-metadata">
        <div className="inline">
          {pathUsername ? <h3>{moment(entry.created_at).format('MMMM Do YYYY')}</h3> : <h3><Link to={`/${writers[entry.writer_id].username}/entries`}>{writers[entry.writer_id].username}</Link></h3> }
          <small>{moment(entry.created_at).fromNow()}</small>
        </div>
        {pathUsername ? entryOptions(pathUsername, currentUser, entry, destroyEntry) : writerInfo(entry, createFollow, destroyFollow, writers)}
      </aside>

      {/* -- Entry item's preview --  */}
      <main className="entry-list-items">
        <Link to={`/entries/${entry.id}`}>
          <article key={entry.id}>{entry.general.slice(0, 290) + '...'}</article>
        </Link>
      </main>

      {/* -- Bookmark toggle --  */}
      <i
        className={entry.bookmarked ? 'fa fa-bookmark fa-2x' : 'fa fa-bookmark-o fa-2x'}
        aria-hidden="true"
        onClick={handleBookmark(bookmarkAction)}
      />
    </section>
  );
};

export default EntryIndexItem;
