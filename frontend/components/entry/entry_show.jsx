import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import GoalIndexContainer from './goal_index_container';
import ReflectionIndexItem from '../reflection/reflection_index_item';
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
    this.handleFollow = this.handleFollow.bind(this);
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

  // componentWillReceiveProps() {
  //   this.props.fetchGoals(this.props.entryId);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params. !== nextProps.match.params)
  // }

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
      .then(() => this.setState({ body: '' }));
  }

  handleDelete(id) {
    return () => this.props.destroyReflection(id);
  }

  handleFollow() {
    const follow_request = {
      follower: this.props.currentUser.id,
      followee: this.props.entry.writer_id,
    };
  }

  showReflectionForm() {
    const { currentUser, entry, reflections } = this.props;

    if (currentUser.id === entry.writer_id) {
      return (
        <form className="reflections-form">
          <label> <h2>reflect back on this entry</h2>
          <textarea value={this.state.body}
                    onChange={this.update('body')}
                    placeholder="thoughts on your old self">
          </textarea></label>
          <button onClick={this.handleSubmit}>add</button>
        </form>
      );
    } else if (isEmpty(reflections)) {
      return (
        <div />
      );
    }
    return (
      <div>
        <header className="reflection">
          <h2><strong>{entry.writer_pseudonym}</strong> reflecting on this entry</h2>
        </header>
      </div>
    );
  }

  showReflections(created_at) {
    const { reflections, currentUser } = this.props;

    if (reflections) {
      return (
        <div className="reflections">
          <section>
            {reflections.map(reflection =>
              (<ReflectionIndexItem key={reflection.id}
                                    entryCreatedAt={created_at}
                                    reflection={reflection}
                                    currentUser={currentUser}
                                    handleDelete={this.handleDelete}
              />))}
          </section>
        </div>
      );
    }
    return (<div />);
  }

  showEntryWithGoals() {
    const { currentUser } = this.props;
    const { general, gratitude, improvements, id, created_at, writer_pseudonym, writer_id } = this.props.entry;
    const entryDate = moment(created_at).fromNow();

    return (
      <div className="entry-item-container">
        <h1><strong>{writer_pseudonym}'s</strong> life {entryDate}</h1>
        <main className="entry-item">
          <aside className="entry-item-writer-info">
             {/* <h2>{writer_pseudonym}</h2>  */}
          </aside>
          <article className="entry-show">
            <section><h2>thoughts</h2>{general}</section>
            { isEmpty(improvements) ? <div /> : <section><h2>things {writer_pseudonym} wished to improve</h2>{improvements}</section> }
            { isEmpty(gratitude) ? <div /> : <section><h2>things {writer_pseudonym} felt grateful for</h2>{gratitude}</section> }
            <GoalIndexContainer entryId={id} />
            { (currentUser.id === writer_id) ? 
              <Link to={`/me/entries/${id}/edit`}>Edit Entry</Link> 
              : <button onClick={this.handleFollow}>Follow {writer_pseudonym}</button> 
            }
          </article>
        </main>
        {this.showReflectionForm()}
        {this.showReflections(created_at)}
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
