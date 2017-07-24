import React from 'react';
import update from 'react-addons-update';

class EntryEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entry: {
        id: null,
        title: '',
        general: '',
        gratitude: '',
        improvements: '',
        writer_id: null,
        public: null,
      },
      goals: {
        goal1: {
          id: null,
          body: '',
          done: null,
          entry_id: null,
        },
        goal2: {
          id: null,
          body: '',
          done: null,
          entry_id: null,
        },
        goal3: {
          id: null,
          body: '',
          done: null,
          entry_id: null,
        },
      },
    };

    this.update = this.update.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.submitGoals = this.submitGoals.bind(this);
    // this.pullEntryId = this.pullEntryId.bind(this);
  }

  componentDidMount() {
    this.props.fetchEntry(this.props.entryId);
    const entry_id = { entry_id: this.props.entryId }
    this.props.fetchGoals(entry_id);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.state = {
      entry: {
        id: nextProps.entry.id,
        title: nextProps.entry.title,
        general: nextProps.entry.general,
        gratitude: nextProps.entry.gratitude,
        improvements: nextProps.entry.improvements,
        writer_id: nextProps.entry.writer_id,
        public: nextProps.entry.public,
      },
      goals: nextProps.goals,
    };
  }

  update(subject, field) {
    return e => (this.setState(update(
      this.state, { [subject]: { [field]: { $set: e.target.value } } },
    )));
  }

  updateGoals(field) {
    return e => (this.setState(update(
      this.state, { goals: { [field]: { body: { $set: e.target.value } } } },
    )));
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  render() {
    const { title, general, gratitude, improvements } = this.state.entry;
    const { goals } = this.state;
    if (this.props.entry && this.props.goals) {
      return (
        <div>
          <form action="">
            <label> 
            <textarea rows="4" cols="5"
                      placeholder={title}
                      value={general}
                      onChange={this.update('entry', 'general')}>
            </textarea></label>

            <label> 
            <textarea rows="4" cols="5"
                      placeholder="What are you thankful for?"
                      value={gratitude}
                      onChange={this.update('entry', 'gratitude')}>
            </textarea></label>

            <label> 
            <textarea rows="4" cols="5"
                      placeholder="Is there anything you wanted to improve? What would you have done differently?"
                      value={improvements}
                      onChange={this.update('entry', 'improvements')}>
            </textarea></label>

            <label> 
            <textarea rows="4" cols="5"
                      placeholder="Add a title if you'd like"
                      value={title}
                      onChange={this.update('entry', 'title')}>
            </textarea></label>

            <label> Goals
              <input type="text" value={goals[Object.keys(goals)[0]].body} />
              <input type="text" value={goals[Object.keys(goals)[1]].body} />
              <input type="text" value={goals[Object.keys(goals)[2]].body} />
            </label>

            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>
      );
    } else {
      return (this.waitingToLoad());
    }
  }
}

export default EntryEditForm;