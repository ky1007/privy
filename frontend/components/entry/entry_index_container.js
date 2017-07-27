import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries, session }, { match }) => ({
  entries: selectEntries(entries.allEntries),
  username: match.params.username,
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: username => dispatch(fetchEntries(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
