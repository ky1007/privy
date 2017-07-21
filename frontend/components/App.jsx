import React from 'react';
import { Route } from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import NavContainer from './nav/nav_container';
import { AuthRoute } from '../util/route_util';

// THIS IS TEMPORARY -- TESTING
import * as APItest from '../util/entry_api_util';
// END

const App = () => (
  <div className="main-container">

    <div className="welcome-container">
      <header className="intro">   
        <h1>Privy</h1>
        <span className="tagline">Journal and reflect on your day, share your day&#39;s experience anonymously. Read about others&#39; experiences.</span>
        <Route exact path="/" component={NavContainer} />
      </header>

      <div className="session-form-container">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>

    </div>

  </div>
);

export default App;
