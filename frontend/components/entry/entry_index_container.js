import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries, session }, { match }) => {
  let sortEntries = selectEntries(entries.allEntries);
  sortEntries.sort((a, b) => b.id - a.id);
  
  // if (match.params.username) {
  //   sortEntries = sortEntries.filter(entry => entry.writer_pseudonym === match.params.username);
  // }

  return {
    entries: sortEntries,
    username: match.params.username,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
