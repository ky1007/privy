import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import EntryIndexItem from './entry_index_item';

class EntryIndex extends Component {

  componentDidMount() {
    const { pathUsername, currentUser, pathname } = this.props;
    const { fetchEntries, fetchFeedEntries, fetchBookmarkedEntries } = this.props;
    
    if (pathUsername) {
      return fetchEntries(pathUsername);
    } else if (pathname === '/feed') {``
      return fetchFeedEntries(currentUser.id);
    } else if (pathname === '/bookmarks') {
      return fetchBookmarkedEntries(currentUser.id);
    }
    return fetchEntries();
  }

  componentWillReceiveProps(nextProps) {
    const { pathUsername, currentUser, pathname } = nextProps;
    const { fetchEntries, fetchFeedEntries, fetchBookmarkedEntries } = nextProps;

    if (this.props.pathname !== pathname) {
      if (pathname === '/feed') {
        return fetchFeedEntries(currentUser.id);
      } else if (pathname === '/bookmarks') {
        return fetchBookmarkedEntries(currentUser.id);
      } else if (pathUsername) {
        return fetchEntries(pathUsername);
      }
      return fetchEntries();
    }
  }

  waitingToLoad() {
    return (
      <div className="loading-bar" />
    );
  }

  // Display specific headings depending on what the index page is for
  showWhoseJournal() {
    const { currentUser, pathUsername, currentWriter, entries, pathname, writers } = this.props; 
    const writerInfo = writers[Object.keys(writers)[0]];

    switch (pathname) {
      case '/feed':
        return (
          <h1>your personal feed from <strong>people you follow</strong></h1>
        );
      case '/everyone':
        return (
          <h1>recent diary entries from <strong>everyone</strong> <span role="img" aria-label="Tada emoji">🎉</span></h1>          
        );
      case '/bookmarks':
        return (
          <h1>your saved <strong>bookmarks</strong></h1>          
        );
    };

    // If the feed is a feed of a single writer's diary entries, create this author heading
    return (
      <section className="profile-info">
        <div className="author">
          <h1><strong>{pathUsername === currentUser.username ? 'Your' : pathUsername+ '\'s'}</strong> Diary</h1>
        </div>

        <div className="author-metadata">
          {writerInfo.country ? <span className="profile-text pretext-country">living in {writerInfo.country}</span> : null }
          {writerInfo.race ? <span className="profile-text pretext-race">ethnically {writerInfo.race}</span> : null }
          {writerInfo.age ? <span className="profile-text pretext-age">is the age {writerInfo.age}</span> : null }
        </div>
      </section>
    );
  }

  showEmptyActions() {
    const { pathname } = this.props;
    switch (pathname) {
      case '/feed':
        return (
          <span>
            <strong>Looks like you aren't following anyone yet.</strong><br />
            Find and explore people to follow on the <Link to="/everyone">Everyone page</Link>.
          </span>
        );
      case '/bookmarks':
        return (
          <span>
            <strong>Looks like you haven't bookmarked any entries yet.</strong><br />
                Find and explore diary entries to bookmark on the <Link to="/everyone">Everyone page</Link>.
          </span>
        );
      default:
        return (
        <span>
          <strong>Looks like you haven't written anything yet.</strong><br />
          <Link to="/new_entry">Write an diary entry</Link> and it will appear here.
        </span>
      );
    }
  }

  render() {
    const { entries, pathUsername, currentUser, writers, pathname, loading } = this.props;
    const { createFollow, destroyFollow, createBookmark, destroyBookmark, destroyEntry } = this.props;
    
    if (loading) {
      return (this.waitingToLoad());
    } else if (entries.length > 0) {
      return (
        <div className="main-container">
          <header className="entry-index-header">
            {this.showWhoseJournal()}
          </header>
          <section className="entry-index">
            <CSSTransitionGroup
            transitionName="entry"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={700}>
              {entries.map(entry => <EntryIndexItem key={entry.id} 
                                                    entry={entry} 
                                                    writers={writers}
                                                    pathUsername={pathUsername} 
                                                    currentUser={currentUser}
                                                    createFollow={createFollow}
                                                    destroyFollow={destroyFollow} 
                                                    createBookmark={createBookmark}
                                                    destroyBookmark={destroyBookmark}
                                                    destroyEntry={destroyEntry}
                                    />
              )}
            </CSSTransitionGroup>
          </section>
        </div>
      );
    } else {
      return (
        <section className="user-content-prompt">
          {this.showEmptyActions()}
        </section>);
    }
  }
}

export default EntryIndex;
