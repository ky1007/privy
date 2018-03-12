import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries, fetchFeedEntries, fetchBookmarkedEntries, destroyEntry } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';
import { createFollow, destroyFollow } from '../../actions/follow_actions';
import { createBookmark, destroyBookmark } from '../../actions/bookmark_actions';

const mapStateToProps = ({ entries, session, users, loading }, { match, location }) => {
  let sortEntries = entries.allEntries;
  const writers = users.allUsers;

  // If user is viewing their feed, check to make sure entries are only from writers they follow
  if (location.pathname === '/feed' && writers) {
    const followWriters = [];
    const followEntries = {};

    // Collect the list of writer's the user is following
    for (let id in writers) {
      writers[id].following ? followWriters.push(id) : null;
    }

    // Select entries from writers the author is following
    for (let id in sortEntries) {
      let entryWriterId = String(sortEntries[id].writer_id);
      if (followWriters.includes(entryWriterId)) {
        followEntries[id] = sortEntries[id];
      }
    }
    followEntries.z = 'cut';
    sortEntries = followEntries;
  }
  
  // If user is viewing their bookmarks, check to make sure entries ones that have been bookmarked
  if (location.pathname === '/bookmarks') {
    const bookmarkEntries = {};
    for (let id in sortEntries) {
      sortEntries[id].bookmarked ? bookmarkEntries[id] = sortEntries[id] : null;
    }
    bookmarkEntries.z = 'cut';
    sortEntries = bookmarkEntries;
  }

  sortEntries = selectEntries(sortEntries).slice(0, -1);
  sortEntries.sort((a, b) => b.id - a.id)

  return {
    entries: sortEntries,
    pathUsername: match.params.username,
    pathname: location.pathname,
    currentUser: session.currentUser[Object.keys(session.currentUser)[0]],
    currentWriter: users.allUsers,
    writers: users.allUsers,
    loading: loading.loadingEntries,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
  fetchFeedEntries: id => dispatch(fetchFeedEntries(id)),
  fetchBookmarkedEntries: userId => dispatch(fetchBookmarkedEntries(userId)),
  destroyEntry: id => dispatch(destroyEntry(id)),
  createFollow: followRequest => dispatch(createFollow(followRequest)),
  destroyFollow: unfollowRequest => dispatch(destroyFollow(unfollowRequest)),
  createBookmark: bookmark => dispatch(createBookmark(bookmark)),
  destroyBookmark: bookmark => dispatch(destroyBookmark(bookmark)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
