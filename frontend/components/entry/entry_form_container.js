import { connect } from 'react-redux';

import EntryForm from './entry_form';
import { createEntry } from '../../actions/entry_actions';
import { createGoal } from '../../actions/goal_actions';

const mapStateToProps = ({ session }) => {
  const writerInfo = session.currentUser[Object.keys(session.currentUser)[0]];
  return ({
    writerId: writerInfo.id,
    writer: writerInfo.username,
  });
};

const mapDispatchToProps = dispatch => ({
  createEntry: entry => dispatch(createEntry(entry)),
  createGoal: goal => dispatch(createGoal(goal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EntryForm);
