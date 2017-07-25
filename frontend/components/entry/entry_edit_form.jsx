import React from 'react';
import update from 'react-addons-update';
import merge from 'lodash/merge';
import { isEmpty } from '../../util/helpers';

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
        goals1: null,
      },
    };

    this.update = this.update.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.submitGoals = this.submitGoals.bind(this);
  }

  componentDidMount() {
    this.props.fetchEntry(this.props.entryId);
    const entry_id = { entry_id: this.props.entryId }
    this.props.fetchGoals(entry_id);
  }

  componentWillReceiveProps(nextProps) {
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

  updateGoals(id) {
    let copyState = merge({}, this.state);
   
    return e => {
      copyState.goals[id].body = e.currentTarget.value;
      this.setState(copyState);
    };
  }

  submitGoals() {
    const { goals } = this.state;

    for (const id of Object.keys(this.state.goals)) {
      if (goals[id].body !== '') {
        this.props.updateGoal(goals[id]);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { entry } = this.state;
    const { updateEntry, entryId } = this.props;
    
    if (entry.general !== '') {
      updateEntry(entry);
      this.submitGoals();
      this.props.history.push(`/me/entries/${entryId}`);
    }
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
        <div className="entry-form">
          <form action="">
            <label> 
            <textarea rows="4" cols="5"
                      placeholder="what was on your mind"
                      value={general}
                      onChange={this.update('entry', 'general')}>
            </textarea></label>

            <label> 
            <textarea rows="4" cols="5"
                      placeholder="things you felt thankful for"
                      value={gratitude}
                      onChange={this.update('entry', 'gratitude')}>
            </textarea></label>

            <label> 
            <textarea rows="4" cols="5"
                      placeholder="things you had wished you could have improved"
                      value={improvements}
                      onChange={this.update('entry', 'improvements')}>
            </textarea></label>

            <label> 
              { isEmpty(goals) ? <div /> : <h2>three main things you want to get done</h2> }
               {Object.keys(goals).map(id => <input type="text" key={id} value={goals[id].body} onChange={this.updateGoals(id)} />)} 
            </label>

            <button onClick={this.handleSubmit}>Update Entry</button>
          </form>
        </div>
      );
    } else {
      return (this.waitingToLoad());
    }
  }
}

export default EntryEditForm;
