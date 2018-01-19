import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CSSTransitionGroup } from 'react-transition-group';

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
      <div className="loading-bar" />
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

  showAuthor() {
    const { writers, entry, currentUser } = this.props;
    if (writers && entry) {
      const author = entry.writer_id === currentUser.id ? 'your' : `${writers[entry.writer_id].username}`;
      return (
        <span>{author}</span>
      ); 
    }
    return null;
  }

  showReflectionForm() {
    const { currentUser, entry, reflections, writers } = this.props;

    if (currentUser.id === entry.writer_id) {
      return (
        <form className="reflections-form">
          <label> <h2>reflect back on your entry</h2>
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
          <h2><strong>{this.showAuthor()}</strong> reflecting on this entry</h2>
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
          <CSSTransitionGroup
            transitionName="entry"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>
            {reflections.map(reflection =>
              (<ReflectionIndexItem key={reflection.id}
                                    entryCreatedAt={created_at}
                                    reflection={reflection}
                                    currentUser={currentUser}
                                    handleDelete={this.handleDelete}
              />))}
            </CSSTransitionGroup>
          </section>
        </div>
      );
    }
    return null;
  }

  showFollowToggle() {
    const { writers, currentUser, entry, createFollow, destroyFollow } = this.props;

    if (writers && currentUser.id !== entry.writer_id) {
      const followAction = writers[entry.writer_id].following ? destroyFollow : createFollow;
      return (
        <button onClick={this.handleFollow(followAction)}>
          {writers[entry.writer_id].following ? 'unfollow' : 'follow'} {this.showAuthor()}
        </button>
      );
    }
  }

  showCompleteEntry() {
    const { currentUser, writers, entry } = this.props;
    const { general, gratitude, improvements, id, created_at, writer_id } = this.props.entry;
    const entryDate = moment(created_at).fromNow();
    // const author = writers[entry.writer_id].username;
    const author = entry.writer_id === currentUser.id ? 'your' : `${writers[entry.writer_id].username}`;
    const authorPossessive = entry.writer_id === currentUser.id ? 'your' : `${writers[entry.writer_id].username}'s`;
    const pointOfView = entry.writer_id === currentUser.id ? 'you' : `${writers[entry.writer_id].username}`;
    
    return (
      <div className="main-container">
        <div className="entry-item-container">
          <h1><strong>{moment(created_at).format('MMMM Do YYYY')}</strong></h1>
          <h2 className="entry-subheading">{authorPossessive} life {entryDate}</h2>
          {/* <small>{this.showAuthor()}'s life {entryDate}</small> */}
          <main className="entry-item">
            <article className="entry-show">
              <section><h2>thoughts</h2>{general}</section>
              { isEmpty(improvements) ? null : <section><h2>things {pointOfView} wished to improve</h2>{improvements}</section> }
              { isEmpty(gratitude) ? null : <section><h2>things {pointOfView} felt grateful for</h2>{gratitude}</section> }
              <GoalIndexContainer entryId={id} />
              <strong><Link className ="entry-links" to={`/${writers[entry.writer_id].username}/entries`}>Read the rest of {authorPossessive} diary</Link></strong><br />
              {/* <strong><Link className ="entry-links" to={`/${writers[entry.writer_id].username}/entries`}>Read the rest of {writers[entry.writer_id].username}'s diary</Link></strong><br /> */}
              {this.showFollowToggle()}
              { (currentUser.id === writer_id) ? <Link to={`/entries/${id}/edit`}>Edit Entry</Link> : null }
            </article>
          </main>
          {this.showReflectionForm()}
          {this.showReflections(created_at)}
        </div>
      </div>
    );
  }

  render() {
    if (this.props.entry && this.props.writers) {
      return (this.showCompleteEntry());
    }
    return (this.waitingToLoad());
  }
}

export default EntryShow;
