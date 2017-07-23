import React from 'react';
import { Route } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import EntryFormContainer from './entry/entry_form_container';
import EntryShowContainer from './entry/entry_show_container';
import NavContainer from './nav/nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// THIS IS TEMPORARY -- TESTING
// import * as APItest from '../util/entry_api_util';
// import * as APItestGoal from '../util/goal_api_util';
import * as ACTIONgoalTEST from '../actions/goal_actions';
// END

const App = () => (
  <div className="main-container">

    <div className="welcome-container">
      <header className="intro">
        <h1>Privy</h1>
        <span className="tagline">Journal and reflect on your day, share your day&#39;s experience anonymously. Read about others&#39; experiences.</span>
        <Route exact path="/" component={NavContainer} />
        <ProtectedRoute exact path="/new_entry" component={EntryFormContainer} />
        <ProtectedRoute exact path="/me/entries/:entryId" component={EntryShowContainer} />
      </header>

      <div className="session-form-container">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>

    </div>

  </div>
);

export default App;

// TEMP 
window.createGoal = ACTIONgoalTEST.createGoal;
window.fetchGoals = ACTIONgoalTEST.fetchGoals;
window.fetchGoal = ACTIONgoalTEST.fetchGoal;
window.destroyGoal = ACTIONgoalTEST.destroyGoal;
window.destroyGoal = ACTIONgoalTEST.destroyGoal;
window.fetchGoal = ACTIONgoalTEST.fetchGoal;

const goal = {  
  body: "My goalz is to learn",
  done: true,
  entry_id: null,
};

window.goal = goal;

// DONE TESTING


// TEMP END


