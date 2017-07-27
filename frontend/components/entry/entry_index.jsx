import React, { Component } from 'react';
import EntryIndexItem from './entry_index_item';

class EntryIndex extends Component {

  componentDidMount() {
    const { username, fetchEntries } = this.props;
    (username) ? fetchEntries(username) : fetchEntries();
  }

  render() {
    const { entries, username } = this.props;

    if (entries.length > 0) {
      return (
        <div>
          <header className="entry-index-header">
            <h1>the most recent journal entries from <strong>{username ? `${username}` : 'everyone'}</strong></h1>
          </header>
            <section className="entry-index">
              {entries.map(entry => <EntryIndexItem key={entry.id} entry={entry} username={username}/>)}
            </section>
        </div>
      );
    } else {
      return (<div />);
    }
  }
}

export default EntryIndex;
