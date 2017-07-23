// writer_id is written in ruby syntax because that's what
// the rails controller is expecting
export const fetchGoals = goal => (
  $.ajax({
    method: 'GET',
    url: '/api/goals',
    data: { goal },
  })
);

export const fetchGoal = id => (
  $.ajax({
    method: 'GET',
    url: `/api/goals/${id}`,
    data: { id },
  })
);

export const destroyGoal = id => (
  $.ajax({
    method: 'DELETE',
    url: `/api/goals/${id}`,
    data: { id },
  })
);

export const createGoal = goal => (
  $.ajax({
    method: 'POST',
    url: '/api/goals',
    data: { goal },
  })
);

// untested, will test after React components are built
export const updateGoal = goal => (
  $.ajax({
    method: 'PATCH',
    url: `/api/goals/${goal.id}`,
    data: { goal },
  })
);


// // TEMP - DONE TESTING
// window.createGoal = createGoal;
// window.fetchGoals = fetchGoals;
// window.fetchGoal = fetchGoal;
// window.destroyGoal = destroyGoal;
// window.destroyGoal = destroyGoal;
// window.fetchGoal = fetchGoal;

// const goal = {  
//   body: "My goals is to learn",
//   done: true,
//   entry_id: 4,
// };

// window.goal = goal;
// // TEMP END

