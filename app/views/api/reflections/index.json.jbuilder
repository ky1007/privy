@reflections.each do |reflection|
  json.set! reflection.id do 
    json.partial! "api/reflections/reflection", reflection: reflection
  end
end