# json.extract! bookmark, :id, :entry_id, :user_id

json.entry_id bookmark.entry_id
if Bookmark.exists?(entry_id: bookmark.entry_id, user_id: bookmark.user_id)
  json.bookmarked true
else
  json.bookmarked false
end

# json.bookmarked entry.bookmarks.exists?(entry_id: entry.id) ? 'IAMTRUE' : 'IAMFALSE'