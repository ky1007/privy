import React from 'react';

const GoalEditItem = () => {
  return (
    <input type="text" value={goals[Object.keys(goals)[0]].body} />
   );
};