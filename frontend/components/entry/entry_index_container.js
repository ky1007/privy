import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries, fetchFeedEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';
// import { selectFeedEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries, session }, { match, location }) => {
  let followees = session.currentUser.followees;
  let sortEntries = selectEntries(entries.allEntries);
  sortEntries.sort((a, b) => b.id - a.id);
  
  // let feedEntries = []; 

  // if (location.pathname === '/feed') {
  //   for (let i = 0, len = sortEntries.length; i < len; i++) {
  //     if (followees.indexOf(sortEntries[i].writer_id)) {
  //       feedEntries.push(sortEntries[i]);
  //     }
  //   }
  //   console.log(feedEntries, 'feed entries');
  // }

  return {
    entries: sortEntries,
    username: match.params.username,
    pathname: location.pathname,
    currentUser: session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
  fetchFeedEntries: id => dispatch(fetchFeedEntries(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
