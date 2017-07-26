import { connect } from 'react-redux';

import { fetchEntry } from '../../actions/entry_actions';
import { fetchReflections, destroyReflection, createReflection, clearReflections } from '../../actions/reflection_actions';
import { clearGoals } from '../../actions/goal_actions';

import { selectReflections } from '../../reducers/selectors';
import EntryShow from './entry_show';

const mapStateToProps = ({ entries, reflections, session }, { match }) => ({
  currentUser: session.currentUser,
  entry: entries.current,
  entryId: parseInt(match.params.entryId),
  reflections: selectReflections(reflections.allReflections),
});

const mapDispatchToProps = dispatch => ({
  fetchEntry: entryId => dispatch(fetchEntry(entryId)),
  fetchReflections: entryId => dispatch(fetchReflections(entryId)),
  destroyReflection: entryId => dispatch(destroyReflection(entryId)),
  createReflection: entry => dispatch(createReflection(entry)),
  clearReflections: () => dispatch(clearReflections()),
  clearGoals: () => dispatch(clearGoals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryShow);
