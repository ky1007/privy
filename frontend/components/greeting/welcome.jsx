import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    const { currentUser } = this.props; 
    return (
      <div>
        <header className="welcome-heading">
          Welcome, <strong>{currentUser.username}</strong>
        </header>
        <section>
          <h3 className="welcome-prompt">What would you like to do?</h3>
          <Link to="/new_entry"><section className="welcome-option-1">write a diary entry</section></Link>
          <Link to="/everyone"><section className="welcome-option-2">browse recently published diary entries</section></Link>
          <Link to="/feed"><section className="welcome-option-3">read recent diary entries from people I follow</section></Link>
          <Link to={`/${currentUser.username}/entries`}><section className="welcome-option-4">read my own diary</section></Link>
        </section>
      </div>
    );
  }
}

export default Welcome;
