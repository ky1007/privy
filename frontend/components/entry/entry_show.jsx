import React from 'react';
import GoalIndexContainer from './goal_index_container';

class EntryShow extends React.Component {
  componentDidMount() {
    this.props.fetchEntry(this.props.entryId)
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  showEntryWithGoals() {
    return (
      <div>
        {this.props.entry.id}, 
        {this.props.entry.general},
        <GoalIndexContainer entryId={this.props.entry.id} />
      </div>
    );
  }

  render() {
    if (this.props.entry) {
      return (this.showEntryWithGoals());
    } else {
      return (this.waitingToLoad());
    }
  }
}


export default EntryShow;
