import React from 'react';

const GoalIndexItem = ({ goal }) => {
  const goalStatus = goal.done ? 'COMPLETE' : 'INCOMPLETE';
  return (
    <li className="goal-index-item" key={goal.id}>
      {goal.body} is {goalStatus}
    </li>
  );
};

export default GoalIndexItem;

