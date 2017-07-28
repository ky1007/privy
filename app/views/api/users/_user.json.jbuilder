json.extract! user, :id, :username, :biography, :country, :age, :race

if current_user
  if user.in_follows.exists?(follower_id: current_user.id)
    json.following true
  else 
    json.following false
  end
end