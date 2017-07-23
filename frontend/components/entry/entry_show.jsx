import React from 'react';

class EntryShow extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.fetchEntry(this.props.entryId)
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  showEntryWithGoals() {
    return (
      <div>
        {this.props.entry.id}, 
        {this.props.entry.general}
      </div>
    );
  }

  render() {
    if (this.props.entry) {
      return (this.showEntryWithGoals());
    } else {
      return (this.waitingToLoad());
    }
  }
}


export default EntryShow;
