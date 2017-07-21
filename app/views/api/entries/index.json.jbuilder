@entries.each do |entry|
  json.partial! "api/entries/entry", entry: entry
end