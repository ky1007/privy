import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
import EntryFormContainer from './entry/entry_form_container';
import EntryEditFormContainer from './entry/entry_edit_form_container';
import EntryShowContainer from './entry/entry_show_container';
import EntryIndexContainer from './entry/entry_index_container';
import NavContainer from './nav/nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

// THIS IS TEMPORARY -- TESTING
// import * as APItest from '../util/entry_api_util';
// import * as APItestGoal from '../util/goal_api_util';
// import * as ACTIONgoalTEST from '../actions/goal_actions';
// import * as APIactRef from '../actions/reflection_actions';
import * as APIref from '../util/reflection_api_util';
// END

const App = () => (
  <div className="main-container">
    <div className="nav-bar">
    </div>

    {/* Homepage (when someone is signed out) */}
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={GreetingContainer} />
      <ProtectedRoute path="/" component={NavContainer} />
    </Switch>
        
    <Switch>
      <ProtectedRoute exact={true} path="/new_entry" component={EntryFormContainer} />
      <ProtectedRoute exact={true} path="/me/entries/" component={EntryIndexContainer} />
      <ProtectedRoute exact={true} path="/me/entries/:entryId" component={EntryShowContainer} />
      <ProtectedRoute exact={true} path="/me/entries/:entryId/edit" component={EntryEditFormContainer} />
      {/* <ProtectedRoute exact path="/me/:entryId/edit" component={EntryEditFormContainer} /> */}
    </Switch>
  </div>
);

export default App;

// TEMP 
// window.createGoal = ACTIONgoalTEST.createGoal;
// window.fetchGoals = ACTIONgoalTEST.fetchGoals;
// window.fetchGoal = ACTIONgoalTEST.fetchGoal;
// window.destroyGoal = ACTIONgoalTEST.destroyGoal;
// window.destroyGoal = ACTIONgoalTEST.destroyGoal;
// window.fetchGoal = ACTIONgoalTEST.fetchGoal;

// const goal = {  
//   body: "goal body here",
//   done: true,
//   entry_id: null,
// };

window.createReflection = APIref.createReflection;
window.fetchReflections = APIref.fetchReflections;
window.fetchReflection = APIref.fetchReflection;
window.destroyReflection = APIref.destroyReflection;
// window.destroyReflection = APIref.destroyReflection;
// window.fetchReflection = APIref.fetchGoal;

const reflection = {
  entry_id: 2,
  writer_id: 2,
  body: "made via API!"
};

window.reflection = reflection;

// DONE TESTING


// TEMP END
