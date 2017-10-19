# json.extract! follow, :in_follows, :out_follows

if current_user
  if user.in_follows.exists?(follower_id: current_user.id)
    json.following true
  else 
    json.following false
  end
end

json.user_id user.id