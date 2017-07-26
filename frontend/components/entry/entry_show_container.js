import { connect } from 'react-redux';

import { fetchEntry } from '../../actions/entry_actions';
import { fetchReflections, destroyReflection } from '../../actions/reflection_actions';
import { selectReflections } from '../../reducers/selectors';
import EntryShow from './entry_show';

const mapStateToProps = ({ entries, reflections }, { match }) => ({
  entry: entries.current,
  entryId: parseInt(match.params.entryId),
  reflections: selectReflections(reflections.allReflections),
});

const mapDispatchToProps = dispatch => ({
  fetchEntry: entryId => dispatch(fetchEntry(entryId)),
  fetchReflections: entryId => dispatch(fetchReflections(entryId)),
  destroyReflection: entryId => dispatch(destroyReflection(entryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryShow);
