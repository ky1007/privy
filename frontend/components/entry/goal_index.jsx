import React from 'react';
import GoalIndexItem from './goal_index_item';
import { isEmpty } from '../../util/helpers';

class GoalIndex extends React.Component {
  componentDidMount() {
    const entry_id = { entry_id: this.props.entryId };
    this.props.fetchGoals(entry_id);
  }

  waitingToLoad() {
    return (
      <div>Loading goals...</div>
    );
  }

  showGoals() {
    const { goals } = this.props;
    
    return (
      <section>
        { isEmpty(goals) ? null : <h2>three main goals</h2> }
        {goals.map(goal => <GoalIndexItem key={goal.id} goal={goal} />)}
      </section>
    );
  }

  render() {
    if (this.props.goals) {
      return (this.showGoals());
    } else {
      return (this.waitingToLoad());
    }
  }
}

export default GoalIndex;
