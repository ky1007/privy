@goals.each do |goal|
  json.partial! "api/goals/show", goal: goal
end