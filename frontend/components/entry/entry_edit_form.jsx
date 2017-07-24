import React from 'react';
import update from 'react-addons-update';
import merge from 'lodash/merge';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.submitGoals = this.submitGoals.bind(this);
    // this.pullEntryId = this.pullEntryId.bind(this);
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

  updateGoals(field) {
    let copyState = merge({}, this.state);
    
    return e => {
      debugger;
      copyState.goals[field].body = e.currentTarget.value;
      this.setState(copyState);
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const { entry } = this.state;
    const { updateEntry } = this.props;
    
    if (entry.general !== '') {
      updateEntry(entry);
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
    const { goalsArr } = this.props;
    // console.log(goalsArr);

    if (this.props.entry && this.props.goals) {
      return (
        <div>
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

            <label> <h2>three main things you want to get done</h2>
              {goalsArr.map(goal => <GoalItem key={goal.id} goal={goal} updateGoals={this.updateGoals} />)}
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

const GoalItem = ({ goal, updateGoals }) => (
  // console.log(goalBody)
  <input type="text" value={goal.body} onChange={updateGoals(goal.id)} />
);

export default EntryEditForm;
