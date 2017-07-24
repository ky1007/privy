import React from 'react';
import GoalIndexItem from './goal_index_item';

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
      <div>
        {goals.map(goal => <GoalIndexItem key={goal.id} goal={goal} />)}
      </div>
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