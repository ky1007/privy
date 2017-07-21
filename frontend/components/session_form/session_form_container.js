import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


import { login, signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({ session }, { history }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionForm));
