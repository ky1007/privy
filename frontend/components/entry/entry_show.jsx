import React from 'react';
import { Link } from 'react-router-dom';

import GoalIndexContainer from './goal_index_container';
import { isEmpty } from '../../util/helpers';

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
    const { general, gratitude, improvements, id } = this.props.entry;

    return (
      <main>
        <article className="entry-show">
          { isEmpty(general) ? <div /> : <section><h2>thoughts</h2>{general}</section> }
          { isEmpty(improvements) ? <div /> : <section><h2>things you wished to improve</h2>{improvements}</section> }
          { isEmpty(gratitude) ? <div /> : <section><h2>things you felt grateful for</h2>{gratitude}</section> }
          <GoalIndexContainer entryId={id} />
          <Link to={`/me/entries/${id}/edit`}>Edit Entry</Link>
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
