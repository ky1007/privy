import React from 'react';
import { Link } from 'react-router-dom';

import GoalIndexContainer from './goal_index_container';
import ReflectionIndexItem from '../reflection/reflection_index';
import { isEmpty } from '../../util/helpers';

class EntryShow extends React.Component {
  componentDidMount() {
    const { entryId } = this.props;
    this.props.fetchEntry(entryId);
    this.props.fetchReflections({ entry_id: entryId });
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  showReflections() {
    const { reflections } = this.props;

    if (reflections) {
      return (
        <section>
          {reflections.map(reflection => <ReflectionIndexItem key={reflection.id} reflection={reflection} />)}
        </section>
      );
    }
    return (<div />);
  }

  showEntryWithGoals() {
    const { general, gratitude, improvements, id, created_at } = this.props.entry;

    return (
      <main>
        <article className="entry-show">
          <h1>{created_at.slice(0, 10)}</h1>
          <section><h2>thoughts</h2>{general}</section>
          { isEmpty(improvements) ? <div /> : <section><h2>things you wished to improve</h2>{improvements}</section> }
          { isEmpty(gratitude) ? <div /> : <section><h2>things you felt grateful for</h2>{gratitude}</section> }
          <GoalIndexContainer entryId={id} />
          <Link to={`/me/entries/${id}/edit`}>Edit Entry</Link>
        </article>
        {this.showReflections()}
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
