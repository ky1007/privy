@entries.each do |entry|
  json.set! entry.id do
    json.partial! "api/entries/entry", entry: entry
  end

  json.writers do
    json.set! entry.writer.id do
      json.id entry.writer.id
      json.username entry.writer.username
      json.country entry.writer.country
      json.race entry.writer.race
      json.age entry.writer.age
      if current_user
          json.following entry.writer.in_follows.exists?(follower_id: current_user.id) ? true : false
      end
    end
  end
end