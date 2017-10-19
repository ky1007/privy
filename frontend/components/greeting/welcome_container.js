import { connect } from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser[Object.keys(session.currentUser)[0]],
});

export default connect(mapStateToProps)(Welcome);
