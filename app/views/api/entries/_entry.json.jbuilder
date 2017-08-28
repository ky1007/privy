json.extract! entry, :id, :title, :general, :gratitude, :improvements, :writer_id, :image_url, :public, :created_at
json.writer_pseudonym entry.writer.username
json.writer_info do
  json.country entry.writer.country
  json.race entry.writer.race
  json.age entry.writer.age
end
