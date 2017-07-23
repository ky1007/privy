@entries.each do |entry|
  json.set! entry.id do
    json.partial! "api/entries/entry", entry: entry
  end
end