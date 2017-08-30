import React from 'react';
import { Switch } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import WelcomeContainer from './greeting/welcome_container';
import EntryFormContainer from './entry/entry_form_container';
import EntryEditFormContainer from './entry/entry_edit_form_container';
import EntryShowContainer from './entry/entry_show_container';
import EntryIndexContainer from './entry/entry_index_container';
import NavContainer from './nav/nav_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="main-container">

    {/* Homepage (when someone is signed out) */}
    <Switch>
      <AuthRoute exact path="/" component={GreetingContainer} />
      <AuthRoute exact path="/login" component={GreetingContainer} />
      <AuthRoute exact path="/signup" component={GreetingContainer} />
      <ProtectedRoute path="/" component={NavContainer} />
    </Switch>
    
    {/* All of the below are single pages that should not render concurrently */}
    <Switch>
      <ProtectedRoute exact path="/welcome" component={WelcomeContainer} />
      <ProtectedRoute exact path="/everyone" component={EntryIndexContainer} />
      <ProtectedRoute exact path="/feed" component={EntryIndexContainer} />
      <ProtectedRoute exact path="/new_entry" component={EntryFormContainer} />
      <ProtectedRoute exact path="/entries/:entryId" component={EntryShowContainer} />
      <ProtectedRoute exact path="/:username/entries" component={EntryIndexContainer} />
      <ProtectedRoute exact path="/entries/:entryId/edit" component={EntryEditFormContainer} />
    </Switch>
  </div>
);

export default App;
