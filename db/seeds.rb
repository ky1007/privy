# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
usr1 = User.create({
  username: "rlstein",
  password: "asdfasdf",
  email: "rlstein914@gmail.com",
  biography: "",
  image_url: "",
  country: "",
  age: "",
  race: "",
})
usr2 = User.create({
  username: "bhuina",
  password: "asdfasdf",
  email: "bhuina847@gmail.com",
  biography: "",
  image_url: "",
  country: "",
  age: "",
  race: "",
})
usr3 = User.create({
  username: "vyanje",
  password: "asdfasdf",
  email: "vyanje43@gmail.com",
  biography: "",
  image_url: "",
  country: "",
  age: "",
  race: "",
})
usr4 = User.create({
  username: "paone",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "",
  image_url: "",
  country: "",
  age: "",
  race: "",
})

