import { connect } from 'react-redux';

import { updateEntry, destroyEntry } from '../../actions/entry_actions';
import EntryEditForm from './entry_edit_form';
import { selectGoals } from '../../reducers/selectors';

const mapStateToProps = ({ entries, goals }, { match }) => ({
  entry: entries.current,
  entryId: parseInt(match.params.entryId),
  goals: goals.allGoals,
  goalsArr: selectGoals(goals.allGoals),
});

const mapDispatchToProps = dispatch => ({
  updateEntry: id => dispatch(updateEntry(id)),
  destroyEntry: id => dispatch(destroyEntry(id)),
  fetchEntry: id => dispatch(fetchEntry(id)),
  fetchGoals: entryId => dispatch(fetchGoals(entryId)),
  destroyGoal: id => dispatch(destroyGoal(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryEditForm);
