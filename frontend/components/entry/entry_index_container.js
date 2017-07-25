import { connect } from 'react-redux';

import EntryIndex from './entry_index';
import { fetchEntries } from '../../actions/entry_actions';
import { selectEntries } from '../../reducers/selectors';

const mapStateToProps = ({ entries }) => ({
  entries: selectEntries(entries.allEntries),
});

const mapDispatchToProps = dispatch => ({
  fetchEntries: writerId => dispatch(fetchEntries(writerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryIndex);
