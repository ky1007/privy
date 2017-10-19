import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries, fetchFeedEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';
import { createFollow, destroyFollow } from '../../actions/follow_actions';
// import { selectFeedEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries, session, users }, { match, location }) => {
  let followees = session.currentUser.followees;
  let sortEntries = selectEntries(entries.allEntries).slice(0, -1);
  sortEntries.sort((a, b) => b.id - a.id);

  return {
    entries: sortEntries,
    pathUsername: match.params.username,
    pathname: location.pathname,
    currentUser: session.currentUser,
    currentWriter: users.current,
    writers: users.allUsers,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
  fetchFeedEntries: id => dispatch(fetchFeedEntries(id)),
  createFollow: followRequest => dispatch(createFollow(followRequest)),
  destroyFollow: unfollowRequest => dispatch(destroyFollow(unfollowRequest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
