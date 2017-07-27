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
usr5 = User.create({
  username: "Alfred Jones",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "I would travel the world",
  country: "South Africa",
  age: "28",
  race: "Korean",
})

Goal.delete_all 
goal1 = Goal.create({
  body: "buy milk and cookies for santa",
  done: false,
  entry_id: 1,
})
goal2 = Goal.create({
  body: "buy milk and cookies for santa",
  done: false,
  entry_id: 2,
})
goal3 = Goal.create({
  body: "buy milk and cookies for santa",
  done: false,
  entry_id: 3,
})

Entry.delete_all 
entry1 = Entry.create({
  general: "Ok so this is what happend

I have an important test tomorrow, and I am almost bad. I am: mentally confused and feeling desesperated. It’s kinda different of anxiety, I feel like my brain is not working like it should. I also can feel it physically.

Recently I’ve been disapointed with one of my friends. I realized that everytime I have problem with people that I believe in, I get in this mental situation again. And I also know that it usually get worse if I don’t treat it properly (from other experiences). 

Now, I’ll have to wait 2 or 3 days to have time to see my psychologist. The episode with my friend happend on saturday. On that day I cried, and in the next one (sunday), by the end of the day I was doing ok. Today I wasn’t really caring or remembering the episode but I am bad and I think it has something to do with it.

If I hadn’t gone trough this before, I would be pretty bad right now. When this kind of thing happend 5 years ago, I used to end up in the hospital with  cardiac arrhythmia and an unstoppable crying. Hopefully, I already know how to deal with it better. Also hopefully I have some cigarrets and some bears in the fridge. ",
  gratitude: "My lysol, my cat Breakfast, rainbows and cloudy days.",
  improvements: "I'm pretty much perfect and there's nothing really else for me to improve :)",
  public: true,
  writer_id: 1,
})
entry2 = Entry.create({
  general: "It’s been a week since the Italian is at his grandpa’s. We almost don’t talk. I miss him, but I am getting tired of desperately missing him. I’m exhausted by pointless dreaming all these three months. I am wasted by blaming myself, by hurting and being afraid to hurt again, by restricting myself and trying to make a decision while there must be only one. I have to let go and move on, and let him move on and let me go.

When feeling for someone die, it’s the worst thing I know. I am afraid of how the closest people become strangers, how they had everything — and then have nothing. No care, no warmth, no kindness. Only indifference. And we only have to watch it happen before our eyes, let our heart heal and pretend the wounds don’t hurt anymore.

Yesterday I was lying all the morning and couldn’t make a move. My body was heavy, and I felt like being without energy at all. My head is aching everyday, pills from ache don’t help. I wake earlier than I need to, and I feel sick from warmth. I’m down all the time. Tough to concentrate when I read, write. Typing is mechanical at least. I just don’t get any pleasure from anything, only meeting with my man and talks with Lavish bring some light.

I hope I’m doing a good job for my colleague with whom I am now going home together. He is aching for a girl he cannot have, and I try to comfort him. He seems to be better while we talk. I like to make people happier. Though I do not always succeed.

Having a lot of talking with Lavish lately. I never had a male friend that I didn’t feel anything except for deep friendly attachment and respect. No romantic images in my thought, no even a hint of sexual desire. I hope I found this friend for life I dreamed about. He is such a good man, so much like me at times. He understands everything I say, and I understand him. He comforts me, so I do to him. He was sad all the day, and at the end I made him smile — for the first time today, he said. I don’t want him to be sad. I wish we could meet sooner, I think we’d be just happy spending time together.

Now I am listening to sweet indie pop and trying to forget the world.",
  gratitude: "i'm glad there is such thing as indie pop",
  improvements: "i need to keep practicing italian",
  public: true,
  writer_id: 1,
})
# https://www.goodnightjournal.com/2017/07/24/now-playing-oh-wonder-heart-hope/

entry3 = Entry.create({
  general: "Our whole world has changed.

My daughter in now in a psychiatric ward. I can’t even say what she has done. It’s so horrible.

Trying to connect the dots..

I feel like I failed her. Everything I did for her. All these doctors…

Never prepared me for this.. Nobody can fix this. Nobody. She changed her whole like in one night.

I’m so broken. Defeated.",
  public: true,
  writer_id: 1,
})
# https://www.goodnightjournal.com/2017/07/24/everything-has-changed-as-we-know-it/
entry4 = Entry.create({
  general: "Today was alright.

I soon as I woke up, I noticed a server thing needing to be taken care of, so I did that. Then I slowly woke up and since I didn’t do go to church, I did a Bible study.

The rest of the day consisted playing games with my second parents and then writing. I was just establishing characters while listening to music for inspiration. The music I’m listening to for it are Aftermath by Caravan Palace, since it gives the dream like feel I need for the storyline, Always by Killswitch Engage for the main character’s relationship, and then the Valerian trailer music (an update of Because by The Beatles) for a dramatic scene and proof of resilience from the main character, or the opposite, where the character gives into the darkness.

Then I watched Supernatural and I have work tomorrow. sigh.

That’s all for today.",
  public: true,
  writer_id: 1,
})
# https://www.goodnightjournal.com/2017/07/24/day-513/
entry5 = Entry.create({
  general: "Hey,

I never kept up with these journals like I said over a year ago, also reading the only two entries I made I realised how I was feeling so confident in getting things sorted. Turns out things got worse and I got stuck in a cycle of bad. It’s difficult to beat the cycle, I want to but then again maybe its got to the point that I don’t feel I even can be happy?

I don’t make things easy for myself, it’s like having two sides to yourself. One side of me, let’s call her Annie. Annie is the side of me that whispers to me when I’m at my lowest:

“You don’t belong here”

“They don’t like you”

“Your being used”

Cute things like that just brimming me in confidence… Then there is Alice. Alice is confident, maybe too much and sometimes hurtful towards other people. I was going to write what she would say but it’s more of what she does.

Now Annie and Alice are both me. I just wish my feelings could just meet in the middle a bit more, either on a high or on a low. And heck none of this is even going to make any sense its just crazy rambles.",
  public: true,
  writer_id: 1,
})
# https://www.goodnightjournal.com/2017/07/23/nothing-much-changed/
