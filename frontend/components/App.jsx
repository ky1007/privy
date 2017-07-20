import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="main-container">

    <div className="welcome-container">
      <header className="intro">
        <link href="https://fonts.googleapis.com/css?family=Pacifico|Permanent+Marker|Grand+Hotel|Rubik:300,700" rel="stylesheet" />      
        <h1>Privy</h1>
        <span className="tagline">journal and reflect on your day, share your day's experience anonymously. Read about others' experiences.</span>
        <GreetingContainer />
      </header>

      <div className="session-form-container">
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>

    </div>

  </div>
);

export default App;
