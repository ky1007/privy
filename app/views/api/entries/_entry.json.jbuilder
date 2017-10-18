json.extract! entry, :id, :title, :general, :gratitude, :improvements, :writer_id, :image_url, :public, :created_at

if current_user
  json.bookmarked current_user.bookmarks.exists?(entry_id:  entry.id) ? true : false
end

json.writer_info do
  json.writer_pseudonym entry.writer.username
  json.country entry.writer.country
  json.race entry.writer.race
  json.age entry.writer.age
  if current_user
      json.following entry.writer.in_follows.exists?(follower_id: current_user.id) ? true : false
  end
end
