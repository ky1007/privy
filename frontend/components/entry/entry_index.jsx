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

    if (this.props.pathname !== pathname ) {
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
    } else if (pathname === '/everyone') {
      return 'everyone';
    }
    return 'people you follow';
  }

  showWhoseJournal() {
    const { currentUser, pathUsername } = this.props; 
    if (pathUsername === currentUser.username) {
      return (
        <div><strong>your</strong> diary</div>
      );
    }
    return (
      <div>the most recent diary entries from <strong>{this.typeOfIndexPage()}</strong></div>
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
