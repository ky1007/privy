import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionLinks from './session_links';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionLinks);
