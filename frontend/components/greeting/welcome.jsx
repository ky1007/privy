import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Welcome extends Component {
  render() {
    return (
      <div>
        <header className="welcome-heading">
          Welcome, <strong>{this.props.currentUser.username}</strong>
        </header>
        <section>
          <h3 className="welcome-prompt">What would you like to do?</h3>
          <section className="welcome-option-1">write a diary entry</section>
          <section className="welcome-option-2">browse recently published diary entries</section>
          <section className="welcome-option-3">read recent diary entries from people I follow</section>
          <section className="welcome-option-4">read my own diary</section>
        </section>
      </div>
    );
  }
}

export default Welcome;
