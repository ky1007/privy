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
      <ProtectedRoute exact={true} path="/everyone" component={EntryIndexContainer} />
      <ProtectedRoute exact={true} path="/feed" component={EntryIndexContainer} />
      <ProtectedRoute exact={true} path="/new_entry" component={EntryFormContainer} />
      {/* <ProtectedRoute exact={true} path="/me/entries/" component={EntryIndexContainer} /> */}
      <ProtectedRoute exact={true} path="/me/entries/:entryId" component={EntryShowContainer} />
      <ProtectedRoute exact={true} path="/:username/entries" component={EntryIndexContainer} />
      <ProtectedRoute exact={true} path="/me/entries/:entryId/edit" component={EntryEditFormContainer} />
      {/* <ProtectedRoute exact path="/me/:entryId/edit" component={EntryEditFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
