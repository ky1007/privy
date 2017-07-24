import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import EntryFormContainer from './entry/entry_form_container';
import EntryEditFormContainer from './entry/entry_edit_form_container';
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
    <div className="nav-bar">
    </div>

    {/* Will show up on the Homepage when someone is logged out */}
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <ProtectedRoute path="/" component={NavContainer} />
    </Switch>

    <Switch>
      <ProtectedRoute exact={true} path="/new_entry" component={EntryFormContainer} />
      <ProtectedRoute exact={true} path="/me/entries/:entryId" component={EntryShowContainer} />
      <ProtectedRoute exact={true} path="/me/entries/:entryId/edit" component={EntryEditFormContainer} />
      {/* <ProtectedRoute exact path="/me/:entryId/edit" component={EntryEditFormContainer} /> */}
    </Switch>
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
  body: "goal body here",
  done: true,
  entry_id: null,
};

window.goal = goal;

// DONE TESTING


// TEMP END


