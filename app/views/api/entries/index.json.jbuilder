@entries.each do |entry|
  json.partial! "api/entries/show", entry: entry
end