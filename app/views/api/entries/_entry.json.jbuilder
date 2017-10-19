json.extract! entry, :id, :title, :general, :gratitude, :improvements, :writer_id, :image_url, :public, :created_at

if current_user
  json.bookmarked current_user.bookmarks.exists?(entry_id:  entry.id) ? true : false
end