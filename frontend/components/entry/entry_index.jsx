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
    } else if (pathname === '/feed') {
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

  typeOfIndexPage() {
    const { pathUsername, currentUser, pathname } = this.props;
    if (pathUsername) {
      return ` ${pathUsername}`;
    }
    return (
      <span>
        people you follow <span role="img" aria-label="Pair dancing emoji">👯‍</span>
      </span>
    );
  }

  showWhoseJournal() {
    const { currentUser, pathUsername, currentWriter, entries, pathname, writers } = this.props; 
    const writerInfo = writers[Object.keys(writers)[0]];

    if (pathUsername === currentUser.username) {
      return (
        <div>
          <span role="img" aria-label="Diary emoji">📝</span> this is your diary, <strong>{pathUsername}</strong>
        </div>
      );
    } else if (pathname === '/feed') {
      return (
        <div>
          your personal feed from <strong>{this.typeOfIndexPage()}</strong>
        </div>
      );
    } else if (pathname === '/everyone') {
      return (
        <span>recent diary entries from <strong>everyone</strong> <span role="img" aria-label="Tada emoji">🎉</span></span>
      );
    } else if (pathname === '/bookmarks') {
      return (
        <span>your saved <strong>bookmarks</strong></span>
      );
    }
    // If the feed is a feed of a single writer's diary entries, render the below
    return (
      <div className="profile-info">
        recent diary entries from <strong>{this.typeOfIndexPage()}</strong><br />
        {writerInfo.country ? <span className="profile-text pretext-country">living in <strong>{writerInfo.country}</strong></span> : null }
        {writerInfo.race ? <span className="profile-text pretext-race"> ethnically <strong>{writerInfo.race}</strong></span> : null }
        {writerInfo.age ? <span className="profile-text pretext-age">is the age <strong>{writerInfo.age}</strong></span> : null }
        {/* {writerInfo.country ? <span className="pretext-country">living in <small className="country">{writerInfo.country}</small></span> : null }
        {writerInfo.race ? <span className="pretext-race"> is ethnically <small className="race">{writerInfo.race}</small></span> : null }
        {writerInfo.age ? <span className="pretext-age"> and is of age <small className="age">{writerInfo.age}</small></span> : null } */}
      </div>
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
        (this.waitingToLoad())
        // <div className="main-container">
        //   <header className="entry-index-header">
        //     <h1>
        //       {this.showWhoseJournal()}
        //     </h1>
        //   </header>
        //   <section className="entry-index">
        //     <CSSTransitionGroup
        //     transitionName="entry"
        //     transitionEnterTimeout={700}
        //     transitionLeaveTimeout={700}>
        //       {entries.map(entry => <EntryIndexItem key={entry.id} 
        //                                             entry={entry} 
        //                                             writers={writers}
        //                                             pathUsername={pathUsername} 
        //                                             currentUser={currentUser}
        //                                             createFollow={createFollow}
        //                                             destroyFollow={destroyFollow} 
        //                                             createBookmark={createBookmark}
        //                                             destroyBookmark={destroyBookmark}
        //                                             destroyEntry={destroyEntry}
        //                             />
        //       )}
        //     </CSSTransitionGroup>
        //   </section>
        // </div>
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
