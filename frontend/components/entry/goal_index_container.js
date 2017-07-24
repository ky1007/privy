import { connect } from 'react-redux';

import { fetchGoals } from '../../actions/goal_actions';
import { selectGoals } from '../../reducers/selectors';
import GoalIndex from './goal_index';

const mapStateToProps = ({ goals }, { entryId }) => ({
  entryId,
  goals: selectGoals(goals.allGoals),
});

const mapDispatchToProps = dispatch => ({
  fetchGoals: entryId => dispatch(fetchGoals(entryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(GoalIndex);
