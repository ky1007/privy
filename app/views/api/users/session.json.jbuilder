json.extract! @user, :id, :username, :biography, :country, :age, :race

json.followers do 
  json.array! @user.in_follows.pluck :follower_id
end

json.followees do 
  json.array! @user.out_follows.pluck :followee_id
end