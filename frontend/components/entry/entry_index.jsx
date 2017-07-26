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
          {entries.map(entry => <EntryIndexItem key={entry.id} entry={entry}  />)}
        </div>
      );
    } else {
      return (<div />);
    }
  }
}

export default EntryIndex;
