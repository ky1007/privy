import { connect } from 'react-redux';

import { fetchEntry } from '../../actions/entry_actions';
import EntryShow from './entry_show';

const mapStateToProps = ({ entries }, { match }) => ({
  entry: entries.current,
  entryId: parseInt(match.params.entryId),
});

const mapDispatchToProps = dispatch => ({
  fetchEntry: entryId => dispatch(fetchEntry(entryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryShow);
