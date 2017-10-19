json.set! user.id do
  json.extract! user, :id, :username, :biography, :country, :age, :race

  if current_user
    if user.in_follows.exists?(follower_id: current_user.id)
      json.following true
    else 
      json.following false
    end
  end

  json.followers do 
    json.array! user.in_follows.pluck :follower_id
  end

  json.followees do 
    json.array! user.out_follows.pluck :followee_id
  end
end