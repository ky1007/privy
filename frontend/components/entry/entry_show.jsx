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
    const { entry, entryId } = this.props;
    
    this.props.fetchEntry(entryId)
      .then(entry => this.props.fetchUser(entry.current.writer_id));

    this.props.fetchReflections({ entry_id: entryId });
  }

  componentWillUnmount() {
    this.props.clearReflections();
  }

  waitingToLoad() {
    return (
      <div className="animated-background" />
      // <div className="main-container">Loading screen!</div>
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

  handleFollow(followAction) {
    const followRequest = {
      follower_id: this.props.currentUser.id,
      followee_id: this.props.entry.writer_id,
    };
    return () => followAction(followRequest);
  }

  showUserProfile() {
    const { writer } = this.props;
    if (writer) {
      return (
        <div>
          {/* {writer.biography}<br />
          {writer.age}<br />
          {writer.race}<br />
          {writer.country}<br /> */}
        </div>
      );
    }
    return null;
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
      return null;
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
    return null;
  }

  showFollowToggle() {
    const { writer, currentUser, entry, createFollow, destroyFollow } = this.props;
    
    if (writer && currentUser.id !== writer.id) {
      const followAction = writer.following ? destroyFollow : createFollow;
      return (
        <button onClick={this.handleFollow(followAction)}>
          {writer.following ? 'unfollow' : 'follow'} {entry.writer_pseudonym}
        </button>
      );
    }
  }

  showCompleteEntry() {
    const { currentUser } = this.props;
    const { general, gratitude, improvements, id, created_at, writer_pseudonym, writer_id } = this.props.entry;
    const entryDate = moment(created_at).fromNow();

    return (
      <div className="main-container">
        <div className="entry-item-container">
          <h1><strong>{writer_pseudonym}'s</strong> life {entryDate}</h1>
          <main className="entry-item">
            <article className="entry-show">
              <section><h2>thoughts</h2>{this.showUserProfile()}{general}</section>
              { isEmpty(improvements) ? <div /> : <section><h2>things {writer_pseudonym} wished to improve</h2>{improvements}</section> }
              { isEmpty(gratitude) ? <div /> : <section><h2>things {writer_pseudonym} felt grateful for</h2>{gratitude}</section> }
              <GoalIndexContainer entryId={id} />
              { (currentUser.id === writer_id) ? <Link to={`/entries/${id}/edit`}>Edit Entry</Link> : null }
              {this.showFollowToggle()}
            </article>
          </main>
          {this.showReflectionForm()}
          {this.showReflections(created_at)}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.entry) {
      return (this.showCompleteEntry());
    }
    return (this.waitingToLoad());
  }
}

export default EntryShow;
