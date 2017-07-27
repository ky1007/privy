import React, { Component } from 'react';
import EntryIndexItem from './entry_index_item';

class EntryIndex extends Component {

  componentDidMount() {
    this.props.fetchEntries();
  }

  render() {
    const { entries } = this.props;
    if (entries.length > 0) {
      return (
        <div>
          <header className="entry-index-header">
            <h1>the most recent journal entries from <strong>everyone</strong></h1>
          </header>
            <section className="entry-index">
              {entries.map(entry => <EntryIndexItem key={entry.id} entry={entry} />)}
            </section>
        </div>
      );
    } else {
      return (<div />);
    }
  }
}

export default EntryIndex;
