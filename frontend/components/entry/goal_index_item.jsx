import React from 'react';

const GoalIndexItem = ({ goal }) => {
  const goalStatus = goal.done ? 'COMPLETE' : 'INCOMPLETE';
  return (
    <li className="goal-index-item" key={goal.id}>
      {goal.body}
    </li>
  );
};

export default GoalIndexItem;

