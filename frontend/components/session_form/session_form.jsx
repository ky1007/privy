import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({ user });
  }

  handleDemo(e) {
    e.preventDefault();
    this.state = {
      username: "rlstein",
      password: "asdfasdf",
    };
    const user = this.state;
    this.props.login({ user });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  }

  renderErrors() {
    const { errors } = this.props;
    if (errors) {
      return (
        <ul className="session-errors">
          {errors.map((error, idx) => (
            <li key={`error=${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return (<div />);
    }
  }

  render() {
    const { username, password } = this.state;
    const { formType } = this.props;
    const sessionAction = (formType === 'login') ? 'Login' : 'Sign Up';
    const oppSessionAction = (formType === 'login') ? 'sign up' : 'login';
    const oppSessLink = (formType === 'login') ? '/signup' : '/login';

    return (
      <div className="session-form">
        <h3>{sessionAction}</h3>
        <span className="alt-session">or <Link to={oppSessLink}>{oppSessionAction}</Link> instead</span>

        <form>
          {this.renderErrors()}
          <label>
          <input type="text" value={username} placeholder="username" onChange={this.update('username')} /></label>
          
          <br />
          
          <label>
          <input type="password" value={password} placeholder="password" onChange={this.update('password')} /></label>

          <br />

          <button onClick={this.handleSubmit} className="session-button">{sessionAction}</button>
          <button onClick={this.handleDemo} className="session-button">Demo</button>
        </form>
      </div>
    );
  }

}

export default SessionForm;
