import { connect } from 'react-redux';

import { createFollow, destroyFollow } from '../../actions/follow_actions';
import { fetchEntry } from '../../actions/entry_actions';
import { fetchReflections, destroyReflection, createReflection, clearReflections } from '../../actions/reflection_actions';
import { clearGoals } from '../../actions/goal_actions';
import { fetchUser } from '../../actions/user_actions';

import { selectReflections } from '../../reducers/selectors';
import EntryShow from './entry_show';

const mapStateToProps = ({ entries, reflections, session, users }, { match }) => ({
  currentUser: session.currentUser,
  entry: entries.current,
  writer: users.current,
  entryId: match.params.entryId,
  reflections: selectReflections(reflections.allReflections),
});

const mapDispatchToProps = (dispatch) => {
  // const followAction = writer.following ? destroyFollow : createFollow;

  return {
    fetchEntry: entryId => dispatch(fetchEntry(entryId)),
    fetchReflections: entryId => dispatch(fetchReflections(entryId)),
    destroyReflection: entryId => dispatch(destroyReflection(entryId)),
    createReflection: entry => dispatch(createReflection(entry)),
    clearReflections: () => dispatch(clearReflections()),
    clearGoals: () => dispatch(clearGoals()),
    fetchUser: id => dispatch(fetchUser(id)),
    createFollow: followRequest => dispatch(createFollow(followRequest)),
    destroyFollow: unfollowRequest => dispatch(destroyFollow(unfollowRequest)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryShow);
