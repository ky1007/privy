import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import GoalIndexContainer from './goal_index_container';
import ReflectionIndexItem from '../reflection/reflection_index';
import { isEmpty } from '../../util/helpers';

class EntryShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      writer_id: this.props.currentUser.id,
      entry_id: this.props.entryId,
    };

    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    const { entryId } = this.props;
    this.props.fetchEntry(entryId);
    this.props.fetchReflections({ entry_id: entryId });
  }

  componentWillUnmount() {
    this.props.clearReflections();
    this.props.clearGoals();
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createReflection(this.state)
      .then(() => this.setState({ title: '' }));
  }

  handleDelete(e) {
    e.preventDefault();

    const reflectionId = e.target.value;
    this.props.destroyReflection(reflectionId);
  }

  showReflections() {
    const { reflections } = this.props;

    if (reflections) {
      return (
        <div className="reflections">
          <section>
            {reflections.map(reflection =>
              (<ReflectionIndexItem key={reflection.id} reflection={reflection} handleDelete={this.handleDelete} />))}
          </section>
        </div>
      );
    }
    return (<div />);
  }

  showEntryWithGoals() {
    const { general, gratitude, improvements, id, created_at, writer_pseudonym } = this.props.entry;
    const date = moment(created_at.slice(0, 10), 'YYYY-MM-DD').fromNow();

    return (
      <main>
        <article className="entry-show">
          <h1>{writer_pseudonym}</h1>
          <section><h2>thoughts</h2>{general}</section>
          { isEmpty(improvements) ? <div /> : <section><h2>things you wished to improve</h2>{improvements}</section> }
          { isEmpty(gratitude) ? <div /> : <section><h2>things you felt grateful for</h2>{gratitude}</section> }
          <GoalIndexContainer entryId={id} />
          <Link to={`/me/entries/${id}/edit`}>Edit Entry</Link>
        </article>
        <form className="reflections-form">
            <label> <h2>reflect back on this entry</h2>
            <textarea value={this.state.body}
                      onChange={this.update('body')}
                      placeholder="thoughts on your old self">
            </textarea></label>
            <button onClick={this.handleSubmit}>add</button>
          </form>
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
