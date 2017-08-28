import React, { Component } from 'react';
import EntryIndexItem from './entry_index_item';

class EntryIndex extends Component {

  componentDidMount() {
    const { pathUsername, fetchEntries, fetchFeedEntries, currentUser, pathname } = this.props;
    if (pathUsername) {
      return fetchEntries(pathUsername);
    } else if (pathname === '/feed') {
      return fetchFeedEntries(currentUser.id);
    }
    return fetchEntries();
  }

  componentWillReceiveProps(nextProps) {
    const { pathUsername, fetchEntries, fetchFeedEntries, currentUser, pathname } = nextProps;
    window.scrollTo(0, 0);

    if (this.props.pathname !== pathname) {
      if (pathname === '/feed') {
        return fetchFeedEntries(currentUser.id) 
      } else if (pathUsername) {
        return fetchEntries(pathUsername);
      }
      return fetchEntries();
    }
  }

  typeOfIndexPage() {
    const { pathUsername, currentUser, pathname } = this.props;
    if (pathUsername) {
      return ` ${pathUsername}`;
    }
    // else if (pathname === '/everyone') {
    //   return (<span>everyone <span role="img" aria-label="Tada emoji">🎉</span></span>);
    // }
    return (
      <span>
        people you follow <span role="img" aria-label="Pair dancing emoji">👯‍♂️</span>
      </span>
    );
  }

  showWhoseJournal() {
    const { currentUser, pathUsername, currentWriter, entries, pathname } = this.props; 
    const writerInfo = entries[0].writer_info;

    if (pathUsername === currentUser.username) {
      return (
        <div>
          <span role="img" aria-label="Diary emoji">📓</span> this is your diary, <strong>{pathUsername}</strong>
        </div>
      );
    } else if (pathname === '/feed') {
      return (
        <div>
          your personal feed from <strong>{this.typeOfIndexPage()}</strong>
        </div>
        // <span role="img" aria-label="Book emoji">📖</span>
      );
    } else if (pathname === '/everyone') {
      return (
        <span>recent diary entries from <strong>everyone</strong> <span role="img" aria-label="Tada emoji">🎉</span></span>
      );
    }
    // If the feed is a feed of a single writer's diary entries, render the below
    return (
      <div className="profile-info">
        recent diary entries from <strong>{this.typeOfIndexPage()}</strong><br />
        {/* {writerInfo.country ? <div className="pretext-country"><small className="country">{writerInfo.country}</small></div> : null }
        {writerInfo.race ? <div className="pretext-race"><small className="race">{writerInfo.race}</small></div> : null }
        {writerInfo.age ? <div className="pretext-age"><small className="age">{writerInfo.age}</small></div> : null } */}
        {writerInfo.country ? <span className="pretext-country">living in <small className="country">{writerInfo.country}</small></span> : null }
        {writerInfo.race ? <span className="pretext-race"> is ethnically <small className="race">{writerInfo.race}</small></span> : null }
        {writerInfo.age ? <span className="pretext-age"> and is of age <small className="age">{writerInfo.age}</small></span> : null }
        {/* {writerInfo.country ? <div className="pretext-country">living in <small className="country">{writerInfo.country}</small></div> : null }
        {writerInfo.race ? <div className="pretext-race">is ethnically <small className="race">{writerInfo.race}</small></div> : null }
        {writerInfo.age ? <div className="pretext-age">and is of age <small className="age">{writerInfo.age}</small></div> : null } */}
      </div>
    );
  }

  render() {
    const { entries, pathUsername, currentUser } = this.props;
    if (entries.length > 0) {
      return (
        <div>
          <header className="entry-index-header">
            <h1>
              {this.showWhoseJournal()}
            </h1>
          </header>
            <section className="entry-index">
              {entries.map(entry => <EntryIndexItem key={entry.id} 
                                                    entry={entry} 
                                                    pathUsername={pathUsername} 
                                                    currentUser={currentUser} 
                                    />
              )}
            </section>
        </div>
      );
    }
    return (<div />);
  }
}

export default EntryIndex;
