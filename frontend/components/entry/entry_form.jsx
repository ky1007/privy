import React from 'react';
import update from 'react-addons-update';
import merge from 'lodash/merge';

class EntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journal: {
        title: '',
        general: '',
        gratitude: '',
        improvements: '',
        writer_id: this.props.writerId,
        public: true,
      },
      goals: {
        goal1: {
          body: '',
          done: false,
          entry_id: null,
        },
        goal2: {
          body: '',
          done: false,
          entry_id: null,
        },
        goal3: {
          body: '',
          done: false,
          entry_id: null,
        },
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.updateGoals = this.updateGoals.bind(this);
    this.submitGoals = this.submitGoals.bind(this);
    this.pullEntryId = this.pullEntryId.bind(this);
    // DON'T FORGET to add goals to this.state
    // You can add public if you want to, mull this over.
  }

  pullEntryId(entry) {
    const { goals } = this.state;

    for (const goalId of Object.keys(this.state.goals)) {
      if (goals[goalId].body !== '') {
        this.setState(update(
          this.state,
          { goals: { [goalId]: { entry_id: { $set: entry.current.id } } } }));
      }
    }
    return this.state;
  }

  submitGoals(createdEntry) {
    const { goals } = this.state;
    const { createGoal } = this.props;

    for (const goalId of Object.keys(this.state.goals)) {
      if (goals[goalId].body !== '') {
        createGoal(createdEntry.goals[goalId]);
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const { journal } = this.state;
    const { createEntry } = this.props;
    const { createGoal } = this.props;

    if (journal.general !== '') {
      createEntry(journal)
        .then(entry => this.pullEntryId(entry))
        .then(createdEntry => this.submitGoals(createdEntry));
        // .then(createdEntry => createGoal(createdEntry.goals.goal2));
        // .then(createdEntry => createGoal(createdEntry.goals.goal3));
    }
    // if (goals.goal1.body !== '') {
    //   createGoal(goals.goal1);
    // }
    // if (goals.goal2.body !== '') {
    //   createGoal(goals.goal2);
    // }
    // if (goals.goal3.body !== '') {
    //   createGoal(goals.goal3);
    // }
  }

  update(subject, field) {
    const currentState = this.state;
    return e => (this.setState(update(
      currentState, { [subject]: { [field]: { $set: e.target.value } } },
    )));
  }

  updateGoals(field) {
    // const currentState = this.state;
    return e => (this.setState(update(
      this.state, { goals: { [field]: { body: { $set: e.target.value } } } },
    )));
  }

  render() {
    const { journal: { title, general, gratitude, improvements } } = this.state;
    const { goals: { goal1, goal2, goal3 } } = this.state;
    const { createEntry } = this.props;

    return(
      <div>
        <form action="">
          <label> 
          <textarea rows="4" cols="5"
                    placeholder="What's on your mind?"
                    value={general}
                    onChange={this.update('journal', 'general')}>
          </textarea></label>

          <label> 
          <textarea rows="4" cols="5"
                    placeholder="What are you thankful for?"
                    value={gratitude}
                    onChange={this.update('journal', 'gratitude')}>
          </textarea></label>

          <label> 
          <textarea rows="4" cols="5"
                    placeholder="Is there anything you wanted to improve? What would you have done differently?"
                    value={improvements}
                    onChange={this.update('journal', 'improvements')}>
          </textarea></label>
          
          <label> 
          <textarea rows="4" cols="5"
                    placeholder="Add a title if you'd like"
                    value={title}
                    onChange={this.update('journal', 'title')}>
          </textarea></label>
          
          <label> Goals

            <input type="text" value={goal1.body} onChange={this.updateGoals('goal1')} />
            <input type="text" value={goal2.body} onChange={this.updateGoals('goal2')} />
            <input type="text" value={goal3.body} onChange={this.updateGoals('goal3')} />
          </label>
          
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
  );
  }
}

export default EntryForm;
