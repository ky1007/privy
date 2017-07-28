import React, { Component } from 'react';
import EntryIndexItem from './entry_index_item';

class EntryIndex extends Component {

  componentDidMount() {
    const { username, fetchEntries, pathname, currentUser, fetchFeedEntries } = this.props;
    if (username) {
      console.log('fetched by username');
      return fetchEntries(username);
    } else if (pathname === '/feed') {
      console.log(currentUser, 'fetchedfeed');
      return fetchFeedEntries(currentUser.id);
    }
    console.log('fetched everything');
    return fetchEntries();
  }

  componentWillReceiveProps(nextProps) {
    const { username, fetchEntries, fetchFeedEntries, currentUser, pathname } = nextProps;
    window.scrollTo(0, 0);

    // if (nextProps.username !== this.props.username) {
    //   username ? fetchEntries(username) : fetchEntries();
    // }
    if (this.props.pathname !== nextProps.pathname ) {
      if (pathname === '/feed') {
        return fetchFeedEntries(currentUser.id) 
      } else if (username) {
        return fetchEntries(username);
      }
      return fetchEntries();
    }
    // if (currentUser) {
    //   console.log('nextprops happened');
    //   // fetchFeedEntries(currentUser.id);
    // }
  }

  // componentWillMount() {
  //   this.props.fetchFeedEntries(this.props.currentUser.id);
  // }

  typeOfIndexPage() {
    const { username, pathname } = this.props; 
    if (username) {
      return ` ${username}`;
    } else if (pathname === '/everyone') {
      return ' everyone';
    } return ' people you follow';
  }

  render() {
    const { entries, username } = this.props;
    if (entries.length > 0) {
      return (
        <div>
          <header className="entry-index-header">
            <h1>the most recent journal entries from
              <strong>
                {this.typeOfIndexPage()}
              </strong></h1>
          </header>
            <section className="entry-index">
              {entries.map(entry => <EntryIndexItem key={entry.id} entry={entry} username={username}/>)}
            </section>
        </div>
      );
    }
    return (<div />);
  }
}

export default EntryIndex;
