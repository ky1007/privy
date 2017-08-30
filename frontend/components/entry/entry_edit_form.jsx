import React from 'react';
import update from 'react-addons-update';
import merge from 'lodash/merge';
import moment from 'moment';
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
      goals: null,
    };

    this.update = this.update.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.submitGoals = this.submitGoals.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.fetchEntry(this.props.entryId);
    const entry_id = { entry_id: this.props.entryId };
    this.props.fetchGoals(entry_id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.entry) {
      this.setState({
        entry: {
          id: nextProps.entry.id,
          title: nextProps.entry.title,
          general: nextProps.entry.general,
          gratitude: nextProps.entry.gratitude || '',
          improvements: nextProps.entry.improvements || '',
          writer_id: nextProps.entry.writer_id,
          public: nextProps.entry.public,
        },
        goals: nextProps.goals,
      });
    }
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

  submitGoals(goals) {
    for (const id of Object.keys(this.state.goals)) {
      if (goals[id].body !== '') {
        this.props.updateGoal(goals[id]);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newState = merge({}, this.state);
    const { entry, goals } = newState;
    const { updateEntry, entryId } = this.props;
    
    if (entry.general !== '') {
      updateEntry(entry)
        .then(() => this.submitGoals(goals))
        .then(() => this.props.history.push(`/entries/${entryId}`));
    }
  }

  handleDelete(e) {
    e.preventDefault();

    const entryId = e.target.value;
    this.props.destroyEntry(entryId);
    this.props.history.push(`/${this.props.currentUser.username}/entries/`);
  }

  showGoals() {
    const { goals } = this.state;

    if (isEmpty(goals)) {
      return (<div />);
    } else {
      return (
        Object.keys(goals).map(id => <input type="text" key={id} 
                                            value={goals[id].body} 
                                            onChange={this.updateGoals(id)} 
                                    />)
      );
    }
  }

  waitingToLoad() {
    return (
      <div>Loading screen!</div>
    );
  }

  render() {
    const { title, general, gratitude, improvements, id } = this.state.entry;
    const { goals } = this.state;
    const date = moment().format("MMM Do YYYY"); 

    if (this.props.entry && this.props.goals) {
      return (
        <div>
          <article><h1>{date}</h1></article>
          <div className="edit-entry-form">
            <form action="">
              <label> <h2>what was on your mind</h2>
              <textarea 
                        value={general}
                        onChange={this.update('entry', 'general')}>
              </textarea></label>

              <label> <h2>things you felt thankful for</h2>
              <textarea 
                        value={gratitude}
                        onChange={this.update('entry', 'gratitude')}>
              </textarea></label>

              <label> <h2>things you had wished you could have improved</h2>
              <textarea 
                        value={improvements}
                        onChange={this.update('entry', 'improvements')}>
              </textarea></label>

              <label>
                {isEmpty(goals) ? <div /> : <h2>three main things you want to get done</h2>}
                {this.showGoals()} 
              </label>

              <button onClick={this.handleSubmit} className="entry-submit-button">Update Entry</button>
              <button onClick={this.handleDelete} value={id} className="entry-delete-button">Delete Entry</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (this.waitingToLoad());
    }
  }
}

export default EntryEditForm;
