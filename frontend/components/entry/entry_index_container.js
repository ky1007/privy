import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries, session }, { match }) => {
  const sortEntries = selectEntries(entries.allEntries);
  sortEntries.sort((a, b) => b.id - a.id);
  return {
    entries: sortEntries,
    username: match.params.username,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
