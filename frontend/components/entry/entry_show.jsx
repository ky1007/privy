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
      <main>
        <article className="entry-show">
        
          <section><h2>thoughts</h2>{this.props.entry.general}</section>
          <section><h2>things you felt grateful for</h2>{this.props.entry.gratitude}</section>
          <section><h2>things you wished to improve</h2>{this.props.entry.improvements}</section>
          <GoalIndexContainer entryId={this.props.entry.id} />
        </article>
      </main>
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
