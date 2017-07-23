@goals.each do |goal|
  json.set! goal.id do 
    json.partial! "api/goals/goal", goal: goal
  end
end