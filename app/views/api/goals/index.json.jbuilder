@goals.each do |goal|
  json.partial! "api/goals/goal", goal: goal
end