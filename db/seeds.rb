# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#### --- USERS --- usrX
User.delete_all
usr1 = User.create({
  username: "Demo User",
  password: "asdfasdf",
  email: "fmay@gmail.com",
  biography: "Horses are kinda my thing.",
  image_url: "",
  country: "Uzbekistan",
  age: "53",
  race: "Caucasian",
})
usr2 = User.create({
  username: "Jaquan Lang",
  password: "asdfasdf",
  email: "JaquanIsAwesome@gmail.com",
  biography: "I would live in Barcelona and have all my hobbies there.",
  image_url: "",
  country: "Taiwan",
  age: "39",
  race: "Chinese",
})
usr3 = User.create({
  username: "Osiris Amon",
  password: "asdfasdf",
  email: "vyanje43@gmail.com",
  biography: "",
  image_url: "",
  country: "Sudan",
  age: "42",
  race: "Nubian",
})
usr4 = User.create({
  username: "Dajao Catig",
  password: "asdfasdf",
  email: "jaquanlangpqf@teleosaurs.xyz",
  biography: "",
  image_url: "",
  country: "Philippines",
  age: "18",
  race: "Visayan",
})
usr5 = User.create({
  username: "Marie Claire",
  password: "asdfasdf",
  email: "ilovescience@gmail.com",
  biography: "I would travel the world",
  country: "Canada",
  age: "33",
  race: "Caucasian",
})
usr6 = User.create({
  username: "Mekere Marauta",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "I would travel the world",
  country: "New Guinea",
  age: "30",
  race: "Papuan",
})
usr7 = User.create({
  username: "Claire Bean",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "I would travel the world",
  country: "France",
  age: "25",
  race: "Latino",
})
usr8 = User.create({
  username: "D. N. Lane",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "I would travel the world",
  country: "Portugal",
  age: "25",
  race: "Native American",
})
usr9 = User.create({
  username: "R. L. Stein",
  password: "asdfasdf",
  email: "pa632ie@gmail.com",
  biography: "I would travel the world",
  country: "Taiwan",
  age: "19",
  race: "Chinese",
})










#### -------------------------------------- ENTRIES -------------------------------------- entryX
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
  writer_id: usr1.id,
created_at: DateTime.now - 900,
updated_at: DateTime.now - 900,
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
  writer_id: usr2.id,
created_at: DateTime.now - 800,
updated_at: DateTime.now - 800,
})
# https://www.goodnightjournal.com/20usr7.id/07/24/now-playing-oh-wonder-heart-hope/

entry3 = Entry.create({
  general: "Our whole world has changed.

My daughter in now in a psychiatric ward. I can’t even say what she has done. It’s so horrible.

Trying to connect the dots..

I feel like I failed her. Everything I did for her. All these doctors…

Never prepared me for this.. Nobody can fix this. Nobody. She changed her whole like in one night.

I’m so broken. Defeated.",
  public: true,
  writer_id: usr3.id,
created_at: DateTime.now - 700,
updated_at: DateTime.now - 700,
})
# https://www.goodnightjournal.com/20usr7.id/07/24/everything-has-changed-as-we-know-it/
entry4 = Entry.create({
  general: "Today was alright.

I soon as I woke up, I noticed a server thing needing to be taken care of, so I did that. Then I slowly woke up and since I didn’t do go to church, I did a Bible study.

The rest of the day consisted playing games with my second parents and then writing. I was just establishing characters while listening to music for inspiration. The music I’m listening to for it are Aftermath by Caravan Palace, since it gives the dream like feel I need for the storyline, Always by Killswitch Engage for the main character’s relationship, and then the Valerian trailer music (an update of Because by The Beatles) for a dramatic scene and proof of resilience from the main character, or the opposite, where the character gives into the darkness.

Then I watched Supernatural and I have work tomorrow. sigh.

That’s all for today.",
  public: true,
  writer_id: usr4.id,
created_at: DateTime.now - 600,
updated_at: DateTime.now - 600,
})
# https://www.goodnightjournal.com/20usr7.id/07/24/day-5usr3.id/
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
  writer_id: usr5.id,
created_at: DateTime.now - 500,
updated_at: DateTime.now - 500,
})
# https://www.goodnightjournal.com/2017/07/23/nothing-much-changed/
entry6 = Entry.create({
    general: "For the past few weeks I have been mentioning to my boyfriend about going on vacation. His mom and dad are very Christian and are so against us going. However, my boyfriend is 20 years old and I had told him that if we want to go we should be able to because we are both adults. Finally, he had told his mom that we're going and she responded with fine, if you want to live your life in sin I can't stop you, but you should be ashamed of yourself for wanting to go. Like seriously?? He told me though to book the trip so I did! In August my babe and I are spending a week in an oceanfront suite in Daytona beach! I'm so excited. I need this vacation so bad. Just a week to sit my butt in the nice sand with the love of my life and forget about all the stresses of the world.",
  public: true,
  writer_id: usr5.id,
created_at: DateTime.now - 400,
updated_at: DateTime.now - 400,
})
# https://www.goodnightjournal.com/2017/07/23/nothing-much-changed/


entry7 = Entry.create({
  general: "So, I'm disabled. Have been since birth. I have what is called cerebral palsy, essentially it is brain damage. The right side of my body is severley weaker than my left. I essentially have no use of my right hand and my right foot is crooked, unable to be flat like a normal foot and I wear a brace on my leg. When I was a child people said that I wouldn't be able to walk, talk, or function normally, have a \"real\" relationship and DEFINATLY not have a family. I gave birth to my son on 11/11/14. No, he is not disabled. Cerebral Palsy is NOT a disease, and not passed down. He's perfectly healthy, a ham, coos too much and is into everything because he is at that stage where he is becoming a little mover.(oh boy) They never said that I could drive, have a job, have a husband and have a life... And then here I am proving them wrong. There are many many idiots in the world. And *my son thinks the window is The Coolest Thing Ever. The only thing that I have an issue with is that I cannot seem to make friends. I am not throwing myself a pity party or anything, but I've just never been good at it. Maybe I just close myself off from people because I've been hurt by \"friends\" in the past that only seem to want to gain the \"handicap perks\" I receive. I am also a much different person than I was in my growing up years. I had the difficulty of accepting my disability, which now I am to a point where I've accepted this, it is not going to magically go away and that I have to fight for things that I want. Poo on society for thinking that disabled folks are stupid,retarded, slow, weird, and show this by making fun of them,being mean and just a plain ass. I am a woman, phenomenally, so there.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr1.id, 
created_at: DateTime.now - 300,
updated_at: DateTime.now - 300,
})

entry8 = Entry.create({
  general: "Am I loving my staycation? Hells ya! The house is quiet and cool, the deck is sunny and hot, the wine is chilled and smooth.  What’s not to love?

I’ve gotten lots of work done this week, feel caught up and ready for next week. But mostly I feel amazing. I’m so happy for the boys, enjoying their vacation time without the “nagging wife”.

Who do you think is having the better time, me or them? Either way, we’re all enjoying life right now.

People are starting to complain about the heat and lack of rain. While I do know we need rain, I am selfish in my desires and I love the heat. I will never complain about it. Summer is my favourite. I don’t know how a sun lover like me ended up living in a place where it is only warm for a few short weeks a year.

Nevertheless I make the best of the short season and soak in every ray of sunshine I can.  So today, tomorrow and Sunday, when it hits temperatures close to +40 Celsius, I’ll fill up on my vitamin D and love every minute of warmth on my face and in my soul.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr2.id,
created_at: DateTime.now - 200,
updated_at: DateTime.now - 200,
}) 

entry9 = Entry.create({
  general: "My older cousin recently moved in and he seems a bit weird. While he’s sick he will be staying with us. I’ve been living with him for a total of a month now, four weeks, and things are sometimes frustrating.

My cousin has this giant box of pills and vitamins he keeps around, and he constantly uses the sink for his goats milk, he seems obsessed with organic crap. Not that it’s a bad thing, I mean he might die in a year, so I try to be tolerant while he fights his terminal illness. He eats well, I suppose I can admire that.

I kind of enjoy having him around, and other times I don’t. I can’t use the living room for exercising anymore, since not even my family must find out that I’m chubby. I am too embarrassed to even do sit-ups in front of close relatives.I certainly won’t be doing them in front of him, or he might see how fat I am.

Anyways, he’s a very nice guy, I guess. I usually don’t trust men, and he seems like bad news all over. My parents haven’t seen him in nearly twenty years until he suddenly shows up needing a place to stay. He actually didn’t even say that, he just showed up one day and announced he was staying here and dumped everything into my bedroom, as a result I am sharing a bed with my mother, and a room.

My mother has an abusive past, so sometimes he lets her vent to him, he listens and it’s pretty awesome. I sometimes think he sucks up to her just so his stay here is prolonged if he somehow gets better. I’m kind of jealous she can be so open.

He always talks about his experiences with women and he looks like a teenage boy, even-though he’s nearly forty-one. He also has a son that he ‘accidentally’ had. He kind of seems like he gets and goes around 24/7. Not to mention his mind seems to be in the gutter 24/7. I think he just wishes he had a woman, to be honest.Because he’s single as hell and no one will date him because of his illness and the fact that he has a 4 year old son.

I sort of wish I could open up to him. Even if it’s a bit delusional, every-time I pray for something or someone, they always show up, and he happened to come after one of my prayers. I’m not very faithful to Christianity like I should be.I still pray and believe, though it’s not as strong as it used to be. All my prayers have been answered in one way or the other, even if it took 6 months to a year, I usually got what I asked for, and sometimes it doesn’t last.

I don’t think venting to him about my own abuse would be good anyways. I don’t like males, and plus, he’s only earned a bad reputation. I like him over my abuser anyways, but I’m still cold to him.I’m awaiting the day he stabs my family and everyone in the back or injures my family emotionally in one way or the other, since that’s what always happens. I don’t want to be part of that though. It would be nice if there was someone I could talk to in my immediate life, someone who could really give me the extra push or encouragement. It’s a bit silly how I want to jump at any chance I have at having someone like that.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
created_at: DateTime.now - 100,
updated_at: DateTime.now - 100,
}) 

entry10 = Entry.create({
  general: "I think I know why, although lately I’ve just been having depressing and overly self critical moments, like saying I’m not good enough at… anything really, at some random moments. I’ve also been much more exhausted than usual. It’ll pass I’m sure. Just praying and trying to stay positive.

Anyway, today went okay. It went by faster, thankfully. I played some Crash Bandicoot, did a little bit of drawing for a contest and watched YouTube. Though, I’ve also been getting second thoughts about Driver. He’s nice, but just kinda doesn’t seem to be my type. I have the feeling I’m only going out with him because I like the idea of a boyfriend and a graduated prom date for next year, and not the actual person. But then again, maybe it’s just because I haven’t seen him in person for a while. Cause if I go back to the times we were in person, I found it enjoyable. I’m gonna have to wait until we are able to meet again and then make my decision. 

That’s all for today.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr5.id,
created_at: DateTime.now - 50,
updated_at: DateTime.now - 50,
}) 

entry11 = Entry.create({
  general: "These past few weeks have been good. Really good. For once in my life, I don’t feel like a boring down-in-the-dumps person. I feel good. I feel happy.

Besides my endless boy troubles, things have been great for me. I’ve been traveling a lot, which is good for me. When I stay at home for a certain amount of time, I begin to feel miserably lonely and it gets to my head and I become depressed. It’s good for me to get out of the house and out of my town for a while. I’ve been constantly moving for almost a month now. 

I do have my little mental breakdowns every now and then, but they usually end by the morning and I move on. Although, whenever I have my little meltdowns, it feels like the world is crumbling in on me and I lose myself for the night. I turn into a puddle of sadness and anxiety. But that’s because I have issues. I’ll always have issues.

Tonight, I am going to a little “party”. It’s a school related event, but I’ll be with some of my best friends who I haven’t seen since the beginning of June. My friend is supposed to pick me up any minute now.

I try not to think about the sadness inside of me. Recently, a bunch of shit has been happening in my life, and surprisingly, I am dealing with it well. Maybe that’s because I’ve been so busy and none of the shit has actually hit me, but I prefer it to be that way. I don’t want to deal with it. I don’t want it to get to me.

I need to finish getting ready, but I thought I’d update a little. I have so much more to write, but I will save that for later–when I have time. Thanks for reading.

Song of the entry: I’m sorry (feat. shiloh) by Swell", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr6.id,
created_at: DateTime.now - 25,
updated_at: DateTime.now - 25,
}) 

entry12 = Entry.create({
  general: "King may not be emotional but he is dependable. I had surgery today (sinus something or another). He huffed a bit that he had to sit in the lobby for 3+ hrs but he did it. His face was the first I saw when I woke up. I got no hugs or kisses or any of that before or after. He did say thay he was pleased they didn’t ugly my face up any more. That made me smile, which hurt. ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr7.id,
created_at: DateTime.now - 14,
updated_at: DateTime.now - 14,
}) 

entry13 = Entry.create({
  general: "Been ambigous if i can make it. Thesis proposal is quite tough for me since I have no Thesis in college, we only had business planning. The standards are so high, I cn’t even understnd this paradigm sometimes. My head is aching everytime I start to open my laptop and search for readings, facts, about the topic I have chosen to study. Plus this issue that I’ve been thinking for the past three weeks, oh, I think it’s been a month. There are people that judge you immediately without knowing the real story. I just want to shout at the top of my lungs that “stop talking, you’re like a stray dog who barks even if you’re unsure if your bark is worthy”. I already swallowed my pride and yet, it seems that they don’t care, they make you feel that you’re not worthy to keep. So bad… Now let’s go back to this thesis..ahm,whew. So deep, so confidential for the company’s side. Erase bad vibes, erase negative people. I’ll go, and will get going weith tis MBA journey. Till then!", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr8.id,
created_at: DateTime.now - 30,
updated_at: DateTime.now - 30,
}) 


entry14 = Entry.create  ({
  general: "Sometimes it takes such a small event to change the outlook of what has been your reality for so many years. for me– that small event took shape in the form of this fine caramel 5’11 god-like figure. Not even knowing him for all that long and I feel this comfort level that i have never felt meeting someone new. It felt refreshing, nerve-wrecking, scary and happy all at once. Deciding to finally put myself out there without expectations was probably one of the best decisions I have made. It has made me question why have i dated dirtbags all of my life. from the moment he opened my door I was hesitant and did not even know what to do… me a 31 year old woman feeling weird because a man has opened a couple doors for me– even me writing this makes me want to cry. something as simple as an opening of the door and me feeling awkward made me realize how fucked up the life i have lived is.

Ive always been resilient– self sufficient, to the point where i have programmed myself to think i can do everything by myself. Probably one of the main reasons all my relationships have failed on my end; always thinking i can do bad all by myself. Jeez- the audacity of life to smack me in the face and make me see things different.

Growing up is a hell of a drug- clears your vision and way of thinking. Growing up has made me look at priorities and what exactly I want out of life. It may be the age talking here or it may be the 11 years i lasted in a emotionless relationship. Where were the compliments? the cuddling? the love? the intimacy? I mean don’t get me wrong there was sex- and not that bad either… but i never experienced what i’ve always fantasized about… not only the intimacy of the flesh but more so of the soul. The piercing look before an intimate kiss. the hair standing in the back of my neck. the wetness of my parts that make me realize just how excited i am. ultimately that is what i would want… Not only a husband- a best friend, a lover, a soul connection that runs deep like the very veins that keep the trees alive.

But… how do I separate the expectation of friendship from the mentality of wanting this man down to the very core? What can I do to keep this friendzone– to not catch feelings? That my friends is the question of the century.

Whatever his purpose in my life is– whether it is something small like finally finding my passion of writing again or a big life event like him becoming my king.. I welcome it with open arms after all that is the journey of life. the journey that began on a Sunday.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr1.id, 
created_at: DateTime.now - 60,
updated_at: DateTime.now - 60,
})

entry15 = Entry.create({
  general: "I want to improve myself, so today I’ve started some easy things to do just that. They seem so silly and unimportant. Walking the dog for an hour each day, controlling my portions, going to bed at a decent time, and journaling.

So today was an okay sleepy Monday. Work was stable, and the skies were filled with big puffy clouds that were strangely yellow…
I saw a monarch flitting around before work. I was early so I stopped at a coffee shop (admittedly it was a Starbucks) and got an iced tea.

Jess and I are rearranging our schedules so we have more time for activity, which included some pre-made breakfasts, from the weekend. They turned out okay, but nothing spectacular. I could almost say the same about lunch. Dinner was really neato though: pasta with  sauteed grated beet (+ extra veg), goat cheese, and toasted almonds. I can’t believe how much Jess liked it 😀 That rocks my socks. I don’t think I’ve ever seen or heard of him eating beets.
My walk with Molly this evening was weirdly chaotic. I guess some events are happening in the area, so a park was mostly closed off (boo!), and there were more people out and about than I felt comfortable being around. Molly also needed some help coming down from stairs (her back is still hurting), but otherwise she was delighted that we were finally out exploring. Tomorrow I’ll avoid any stairs.

Until tomorrow

", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr2.id,
  created_at: DateTime.now - 90,
  updated_at: DateTime.now - 90,
}) 

entry16 = Entry.create({
  general: "its been hard these past few weeks. ive given up drugs and alcohol but there are still days where i want to just give into the cravings and walk out of here, but then i think about the progress that im made in the last month. i have come pretty far from where i was. I have no where else to go if i do leave here theres no one who will take me in I would have to live on the streets or worse the shelters around here in this shitty town or whatever you want to call it. I would also be giving up my child, because i know for a fact that i wouldnt see him at all if i wasnt here. so for real this place has saved me from myself and from everything bad out there, At least here i have people who care whether i get up and out of bed in the morning people who care about how im feeling who are there to listen when i want to talk. Which i want to do more of because im realizing that i cant do it on my own even though ive been trying, recovery just doesnt work like that. I want to be sober already for years but im at 30 days today. i want to have a job but my job right now is not to relapse and focus on putting the skills and lessons im learning to use, i want to have my own place but right now im living in a community home, theres 4 different people living in this house and it can feel crowded at times but most times im glad that theres other people here and not just me. I feel better knowing that theres others around I dont feel so lonely and like im going through this alone, because i know that they have or are going through the same thing as I, but im here and i cant wait till im where i want to be in life. ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
  created_at: DateTime.now - 120,
  updated_at: DateTime.now - 120,
}) 

entry17 = Entry.create({
  general: "Right now I’m literally teared up and i don’t know why well actually i do but its so confusing you know just thinking about the future makes me for real tear up and not in the happy way i really have to  stop thinking about the future because its still a far really far but you know what people say.. time flies. and its just sometimes i wish my family was different or my life but i love my life what is there not to love i have a roof over my head ,shoes on my feet and clothes and i have things that are not needed but wanted. what is there to complain. well the thing is I’m not I’m not complaining about my childhood because is not messed up and all. but i have a feeling that feels like I’m going to hate my life or the one in the future because I’m going to grow up pick a career and just hate it. i have a lot of hobbies like dancing, cooking,baking,reading,writing but when i think about what i want to be or do and  i don’t want to be a dancer or a cook or a writer or anything. i don’t want a career that i’ll hate but i can’t think of one career and believe me i thought of all of them and all of them  just seem so lifeless. the only thing i know is i do not want to live a life that is so normal and just because i have too. Its not like i don’t want to work i do who can not work you need money so what are you going to do i guess waking up going to work wow i don’t even know what to say because its so confusing like who doesn’t work i guess i hate a life where i have to do normal things like go to college then go to work and live a hard dam life but what am i going to do its not like i can do anything else i live in a place where everyone is so dam normal and boring. like how was your day ? well i woke up went to work came home and rested and had the most normal day right?well i have nothing more to say what can i? I really do not want to post this but this is my outlet so there goes the update button.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr5.id,
  created_at: DateTime.now - 150,
  updated_at: DateTime.now - 150,
}) 

entry18 = Entry.create({
  general: "So, I was readin’ some survived pages of my old and only diary. Beside the fact that I’m gonna burn it as fast as I can and fuck the ethics of respect to dead trees in this special case, things were unbelievably weird with it. This diary goes back to 9-10 years ago and I’m like who the hell did write this crap?! Is that really me? Was I stolen by some cruel aliens? This is just pure misunderstanding!
And I remembered how I mucked somebody for her teen diary a few years ago. I was almost like her. Except that I’m not stupid enough to keep this evidence of shapeshifting. It’s like worm and butterfly. Well, I’m not sure about the butterfly part for who I am right now, but I was definitely a moran worm back then. Some references to Latin American writers were promisin’. The funny thing is I don’t remember readin’ ’em at all! I used to be a huge football fan back then. No surprise. God was still alive. Again, according to the level of my stupidity, predictable. I listened to radio and loved a LOT of actors! Sure I did. Apparently, I was bored to death most of the times. Total mess. The way I saw the world, the very first traces of my depression, people I hung out with (who defuq is Leila? Or roya?)…. total freakin’ mess.
The scariest part is I think I’m gonna look back at this journal and I’m gonna see my present self a poor stupid worm again.
Butterfly is just a dream. Butterfly is far from happenin’.

PS. I became so pink recently! It’ll be OK after seein’ my babe. Promise.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr6.id,
created_at: DateTime.now - 180,
updated_at: DateTime.now - 180,
}) 

entry19 = Entry.create({
  general: "In the 6th grade, I saw you in lunch. You had no clue I existed while all my friends knew how strongly I felt for you. That summer, I dug through the yearbook to find your name. I asked my friend who sat at your lunch table about you.

In the 7th grade, my best friend became friendly with you and eventually told you how I felt. She broke my heart with every conversation she initiated or hug she gave you. I never said a word but cried when I was alone.

In the 8th grade, each 11:11 was for you. We were in the same cycle. I would wait outside before class to catch a glimpse of you. My friends questioned how I retained such passion for someone I had never spoken a word to.

In my freshman year, I watched you in gym. I talked to my friends about how good you looked and how friendly you seemed. I faced the fact that I would never have a chance with you.

In my sophomore year, I entered a relationship with someone else.

In my senior year, I joined my friend’s lunch table which was yours, as well. We began talking briefly. I told my mom about you, explaining the irony that you finally entered my life once I was committed to someone else. But that commitment did not last much longer, and soon, I was with you. We grew knowledge about and love for one another. We were beautiful.

In my first year of college, you motivated me to better myself and follow my dreams. You showed me undying support and unconditional love. We were inseparable and we loved it. Everything I had ever wanted was mine.

This summer, you broke things off. We tried to make things work again, but to no avail. I still cry most days and pray things will somehow go back to how they were. I feel incomplete without your presence. I cannot sleep without you here. Each 11:11 is for you.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr7.id,
created_at: DateTime.now - 220,
updated_at: DateTime.now - 220,
}) 

entry20 = Entry.create({
  general: "My hands stink of ham and cheese. There are approx. four new zits on my face. I can’t feel my feet.

Mum and I got to the restaurant at 12:15. Fifteen minutes early. I was introduced to Dean, a bald guy smelling of cheap old-school deodorant wearing chucks and a silver necklace around his neck. I was ordered to help others sweeping the floor. Soon after, I was at the counter peeling garlic, chopping squid, then grating ham, cheese and mushrooms. Around two o’clock my boss (the owner, the guy who makes pizza) brought me a pizza which made me so glad. I knew I was going to be eating there, but I still felt touched.

There wasn’t really much for me to do at the kitchen, so they moved me over to the bar where, with a couple of my age I attempted to shine the glasses. I stuck to washing them instead. Then I was told to shine the cutlery, then to grate some ham again.

We finished around 10 o’clock. I had been thinking of approaching Ian, a tall, light-haired guy working as a waiter, for at least 3 hours. I had intended to start small-talk about the dragon tattoo on his right arm but I, to say it politely, pussied out.

There are a few things from today that I think will stay in my memory for a long time. The first and the most striking one of them is the face Dean made when he took the first drag out of his (most likely) twentieth Chesterfield Red today. He sucked the smoke in, squinted his eyes lightly and frowned in what seemed like pleasure. It all happened in a blink of an eye. For a reason, I was mesmerised.

The second thing is the appearance of the boyfriend of the couple from the bar. He had blue eyes, brown hair and the most sincere juvenile smile.

The third thing is the light panic attack I had when I was looking for the house of my mum’s aunt, and I thought I couldn’t find it. I was alone in the dark, with only a bag of peanuts, my phone, my wallet, and Dean’s “Goodbye, have a nice night!”, that he said to me when I was leaving his car, still in my ear. I did end up finding it though.

I’m laying in a room separate of where my mum’s aunt and her granddaughter are. They’re speaking quite loudly, and I just heard the girl say, “But grandma, like, don’t ever die.” Her grandma said, “I won’t.”

Speaking of which, my uncle’s father died today. Barely knew the man, he was a heavy smoker.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr8.id,
  created_at: DateTime.now - 250,
  updated_at: DateTime.now - 250,
}) 


entry21 = Entry.create  ({
  general: "I made it home yesterday. I weighed myself this morning. I was down 3/10 of a pound. 🙁 I don’t get it. I KILLED myself burning the shit out of calories. How is this possible? It’s not bullshit “muscle weighs more than fat” either. I thought at least I would be down like 3 pounds. What the fuck? That is a huge disappoint. 

I feel a little better this morning, though, being back in my own space. I need to get several things done this am and then I have the lung doc appointment in the afternoon. My feet are aching. My place is filled with boxes for school. I will be glad when I get them OUT. 

Later, that same day…

It’s 6:24 pm. I went to the lung doctor today. She is upping my medicine, but thinks I’m okay. I went to the bank and the post office this morning. I haven’t felt good today. My feet are aching and my head hurts. I ordered myself some new running shoes this morning. I got Asics. That is the only brand endorsed by the American Podiatry Docs. What the hell. I’ll give them a try. 

I had 2 checks in my mail- one from New York DOE- my per session pay, and one from PNC- I had an ETSY deposit and the refund from one of my NYS tests go there. Ironically, I also got a bill from the state of Kentucky for taxes. I get one every fucking year, so they balanced each other out. Oh well. It’s better than just getting the bill only, I suppose. My last paycheck was only $500. That is all I will get on the next 3, too. I guess it’s good that I didn’t have my surgery and got that money back. I will pull into the gas station on empty in September when I start getting paid again. 

Ugh. I was happy about living in New York when I left here to go to Kentucky two weeks ago. Now, I am all out of sorts. I am upset over going to LTMS and seeing my kids and missing them. I am missing John. I am missing Noah. I don’t know what I want today. 

", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr1.id, 
created_at: DateTime.now - 400,
updated_at: DateTime.now - 400,
})

entry22 = Entry.create({
  general: "Note: I somewhat overexaggerated the intensity of the last post. My anxiety makes small problems seem like the end of the world to me.

After my last entry, we were rushed to breakfast and I forced myself to eat even though I wasn’t hungry. My brothers and I were then told to pack up cause were we going to leave the hotel and head home. During the packing time, I began to feel sick. On the ride home, I was tired because I had been up all night (I’m a night owl) and it was 11:00 AM and I hadn’t slept yet. So, I took a nap and suddenly woke up some time later feeling horrible, like I had to throw up. Timeskip to the point where I end up in a Circle K bathroom trying to throw up so I can make it the rest of the way home when my dad suddenly needs to use to bathroom. Then some other guy. I just got a Sprite and left.

The rest of the trip was hell for me, as I was trying to hold down my lunch….er, breakfast. When we got home, funnily enough, I felt somewhat better. And then I didn’t, and expelled my guts into the toliet. But, at least I was home!

I woke up an hour ago. It’s currently 2:30 AM and I’m feeling a little better (trying not to jinx things lol). Today, my dad is supposed to be making us all go to a movie thing with someone (I forgot who) and their kids. Funnnnnnnn. My brothers and I have already decided to charge our phones for today so we can listen to music through the whole movie. I hope I don’t get sick at the movie….

With that being said, I’m going to try to calm down and relax as my anxiety is killing me.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr2.id,
created_at: DateTime.now - 550,
updated_at: DateTime.now - 550,
}) 

entry23 = Entry.create({
  general: "It’s probably safe to say the St. John’s Wort works better than the Sam-e.  I really had my hopes up for it too.  It’s probably also true that the Vyvanse for the ADHD is making my anxiety worse but gaining weight from binge eating was fucking me up mentally too.  Double edged sword.

I’m overtired.  Had to take Xanax.  Anxiety is too much.  I relapsed and cut.  It didn’t give me the same relief it has in the past, just makes me think I need to cut deeper for more pain.  I deserve it.

I need to be punished and for everyone to know I’m suffering so they know all the bad I’ve done I recognize.

Sometimes the only thing that eases my mind is knowing I can kill myself. I worry about money and losing my job.  If I do I can kill myself to end the worry and shame.

I’ve pushed away and successfully lost friends and a business.  I’m unsuccessful and moving backwards.  I quit things because they are too hard and I’m not capable.  Practice doesn’t make perfect for me, I don’t improve beyond mediocre at anything.  It’s fact.

I’m afraid always.  I’m 100\" alone.  If I lost my apartment I’d have to die.

I’m fat so nobody gives me a second look.  I’m too embarrassed to have sex with anyone anyway.

I feel shame and inadequacy 100\" of the time.  It’s due to my excessive mediocrity.  I excel at nothing.  I think it’s hard when you want things in your life but you can’t have them because your brain is broken, make it too stupid to progress.

I can’t love myself.  I make more mistakes than most people and then feel regret and shame, but it’s deserved.  My brain won’t let me do the right thing.  I can’t learn from my mistakes.

I slowly lose everyone close to me.  Shame can’t allow me to go back.  You’re better off and I am too needy to provide a two-way friendship.

Everything I know is that I need to love me and get better but everything I want is for someone to love me back together and make me feel safe.  I can’t provide that to myself. No wonder I’m nobody’s “go to” person.  If I can’t make me feel better I’m sure I don’t help anyone else.  I’m too selfish.  I’m too fat for anyone to want to be around.  I have no confidence.  I am not smart. I have no hobbies.  I have no talents.  I drain those around me because of my insecurities, my anxious thoughts, and my paranoia. I can’t calm myself.  I can’t cope.  I can’t stop my own distress.  I can’t reassure myself.  I need someone/want someone to give me those things.  It’s unreasonable but I crave the safety of someone else.

Everyone talks bad about me.  They think I cross lines and am inappropriate and a joke.  I am not reliable.  Nobody seeks guidance from a proven failure.

I think I will feel better if I cut under my forearms but it’s hot and I’ll have to wear long sleeves.

I can see moments of my childhood.  I watched my parents scream at each other over money and my mom threw a glass ashtray at my dad and it smashed our front door.  I ran out of the house without shoes.  They fought and I went to their room to ask them to hug and make up and they wouldn’t.  I begged.  Why would they let me watch that and then not appease me?  I was a fucking child.

It happened more than once.

I always felt uneasy with them in terms of life plans and events.  Like they weren’t organized or prepared enough for vacations, trips, parties, finances, etiquette etc.  I envied other parents because they had it together and they made me feel safe, like they were smart and ready and everything would be OK.

I need that again.

I can’t save myself.  I’m not capable.

I know know nobody wants to be with me.  I bring nothing to the table.  I only take.

I am bad.  I am needy.  I fail in all aspects of life.  I should feel embarrassed 100\" of the time.

I need to escape this.  Please", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
created_at: DateTime.now - 625,
updated_at: DateTime.now - 625,
}) 

entry24 = Entry.create({
  general: "I don’t think I ever want to be in love again…I don’t want the pain or the hurt anymore. I don’t want the temporary happiness because that’s what it is TEMPORARY! Who would want that ! Who wants to know that when they enter into somthing that it’s all gonna crash and burn in the end…? What sane person would willing enter into that ?  

I fell once, I fell hard and fast and it felt like my whole world had stoped and time stood still…it was everything they described in the movies. It was the fire works and butterflies. It was earth shattering completely stupidly ridiculouse love. It scared the shit out of me…every single day for 3 years I was scared because I was so happy I was waiting for somthing to go wrong…how fucked up is that ! I was waiting for somthing to go wrong! Every fight every raised voice any tiny mishap I was expecting somthing terrible ! 

It did. It fell to shit after 3 years…he just stoped loving me. Just like that, out of nowhere for no good reason…that’s it… it didn’t matter about the last three years or the future we planed none of that mattered, because he just changed his mind. 

So now if people ask me “do I believe in love” I laugh  because love isn’t real. It’s temporary it’s a temporary peice of happiness that will come to and end. Being in love is like believeing in santa clause or the Easter bunny…neither are real, yet people still believe in them… they buy into the fantasy because it’s easier then realising that there is no such thing as santa clause, or the Easter bunny…Or LOVE ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr5.id,
created_at: DateTime.now - 701,
updated_at: DateTime.now - 701,
}) 

entry25 = Entry.create({
  general: "In the morning, I was going to work, near the bus station, eventually, I saw a girl sitting on the bench. she looked very familiar to me, I went close to her and said Hi, when I recognized her, I was shocked because she doesn’t live in this neighborhood.   she was my classmate in college.her name is Roya, I like this girl. she is one of the most amazing girls I know.

We talked and until the bus arrived. About her: she is very kind and beautiful

The Point is, should I ask her out?", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr6.id,
created_at: DateTime.now - 1300,
updated_at: DateTime.now - 1300,
}) 

entry26 = Entry.create({
  general: "The weekend is nearly finished and I  haven’t done what I can call “productive activities”. But I’m doing activities one needs to survive… washing the dishes, groceries , cooking, sleeping. Oh how do I get the motivation to do what I have to do?

I havent seen my crush today. Anyway, I’ll see him on some random day. 

How to get the momentum to study?", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr7.id,
  created_at: DateTime.now - 920,
  updated_at: DateTime.now - 920,
}) 

entry27 = Entry.create({
  general: "I have been a really good, loyal dependable frienfs to several people.  However I have never had this friendship reciprocated, all the while watching these same people be extraordinary friends to other people.  So it wasn’t that they were incapable of being good friends that simply wasn’t available for me.  This is the reason that I rarely use the word “friend” if ever.  It doesn’t exist on my life.  I have people I know and people that I don’t like.  No friends", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr8.id,
created_at: DateTime.now - 170,
updated_at: DateTime.now - 170,
}) 


entry28 = Entry.create  ({
  general: "I finally spoke with my Manager about getting more hours, he said he would do his best. Within this conversation I came to find out he has no intention of giving me full time hours. This isn’t ideal, but I’ll manage to pull through some how. The search to find something full time is on, but how far will I sink until I find something?
 
Had I known the intention for full time hours were never there, I would have been looking for something full time, not part time during the morning, that will be meet all my needs. This just opens up what I could be looking for. Another cook job is out of the question.

Ann and I spent quite sometime at my mothers house today. I washed both of my cars, as I’m getting ready to sell the intrepid. I need the money to get by. Even thought I really don’t want to. I wanted to sell it to my mother to keep it in the family and I could eventually buy it back from her. Why I love that car so much U have no idea, but I do. I’ve had it for so long, have been through so much with that car, it got me every place I needed to go and never let me down. I can’t even say that about most of my friends or family. It’s old I know, but it’s mine. Anyways, we had dinner there, I helped my mother husband power was the house. It was a decent day. Ann spent most of the time with my mother, that could have been damaging….I have to ask Ann what she had to say.

Thing with Ann and my self have been nothing short of amazing. When we first started dating, I was very scared, for her, for my self, what other may say after what happened. I’m not scared anymore, We’re very open with each other, it’s weird actually. We both have an understanding of what the other one is going through personally, and as a couple. It makes me realize how important communication really is. Even in the smallest of the sense. Whether it be talking about your deepest secrets, to giggling at meme’s and explaining why they are so hilarious to you, or belting songs out in the car as you drive. It builds a connection you couldn’t imagine. Half the time words aren’t even necessary. Your eye’s speak for you, your touch expresses for you, your body tells your story for you. It’s a love words just cant describe.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr1.id, 
created_at: DateTime.now - 47,
updated_at: DateTime.now - 47,
})

entry29 = Entry.create({
  general: "So I haven’t wrote in a while.  Nothing else has been happening until last night. We were getting ready for bed with Danica and she turns around and asked me why her pop pop had to leave her. She just cried. She said she just misses him she misses everything about him. But mostly misses his squeezys. She also asked me what happen and I told her everything. I told her that he had cancer. She asked what that was and  I said its a disease that makes you very sick. Some times you can get better which he did get better but other times you don’t get better and that is what happen. He fought a very long fight and he is so strong. He is the strongest thing that we will ever know.  She laid in bed and just cried I just want my pop pop back please bring him back. The only thing I can say to her I wish I can I wish I can bring him back and help him more but I cant I really cant. But we can go and visit him and talk to him about whatever you want. But we can’t see him only in pictures. Only way we can see him is that way. I miss him so much he was amazing. She agreed to that she said mommy he was amazing because I was his best friend. He was my best friend I just want my best friend back. This whole conversation was so hard that I just couldn’t take it any more.

So tonight we go to my moms to hang out with her and the family. Well she had like 5 insurance papers from different company’s that needed to be filled out. So we got everything in order. Sticky notes on what needs to be done to get them mailed out. We got the big one filled out so that is the main thing. So now we just wait for the money.  So when we left we were driving home and the girls were flipping out because there was a little fly in the car. Well we have been having A LOT of storms well the sky is all different colors. So we were driving and she goes mommy the sky is pink and im like yeah hunny it is and she goes do you know what that means and im like no what and she said it means love and I said okay and that pop pop is telling me that he loves me. she goes to the next color yellow and that means smile and that pop pop is smiling down on me.  Than she goes mommy its blue that means pop pop is giving me a squeezy.  I didn’t get upset at all until after she went to bed. I just cried and im so over that my four year old daughter has to have broken heart because of her best friend is gone.

Also when I was at my moms I was telling her  why I was feeling guilty and she totally understands why I feel this way. and I just hate feeling this way.

Oh well I guess its time to go. We are heading to Kentucky tomorrow for the evening so hopefully it will be a good time. we are going to the aquiriam and then swimming. Danica is so happy I think this is the happiest shes been in a few weeks.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr2.id,
created_at: DateTime.now - 231,
updated_at: DateTime.now - 231,
}) 

entry30 = Entry.create({
  general: "As I wrote in my last entry, Jack wanted to pay for my niece and I’s trip to the hot pools for her birthday. After me trying (and failing) to convince him not to, I finally caved and accepted his offer. 

I did so after ballet the day before we were meant to go. 

I’ve been doing ballet for years, I haven’t really gone far with it, but I don’t mind. Ballet is just my way of staying in top of my fitness while being busy. 

I got out of the studio and was in the changing room when my phone went off.  

\“Have you thought about my offer more? I’m being serious, I have enough money to book out the entire place for you.\” The text from Jack read. 

\“I have, and it’s still a solid no.\” I begin to type back, but I decide it’s easier to agree to let him do it, then to have constantly badgering me about it. 

\“Fine, Jack. You can pay for it. Nobody can know though.\” I hit send and turn my phone off. 

Once I return back to my hotel, I receive a notification saying that $350 had been transferred into my account from Jack. 

My niece and I ended up having a great time. It came to less then what he gave me, so I was able to take her shopping afterwards. 

When I told Jack that I took her shopping he looked really happy. I think that as a father he knew that she would’ve been really happy with me. 

He asked me out to dinner one more time before I leave for Arizona and he leaves for L.A. I said yes and he smiled his wonderful smile. He then kissed me on the cheek again and held my hand as he walked me to the door. 

I’m starting to fall for him, even though I promised myself I wouldn’t. However, I’m not going to let anything happen, because I know how much pain that can brong upon a family.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
  created_at: DateTime.now - 442,
  updated_at: DateTime.now - 442,
}) 

entry31 = Entry.create({
  general: "I was hoping to not do this tonight. Drinking to dull the pain, but it only made it worse. You’ve loved me unconditionally, and yet I’ve managed to push you away because I’m too ashamed to tell you why I’ve been in a \“bad mood\” today. Like I always do, I resort to shutting myself down, putting up a wall that not even the most determined could knock down.
    
I lash out at you, manage to take the blame off myself. You try to compromise with what you think the problem is I told you, but I'm realizing it has nothing to do with you. How do you tell the one person who has been and continues to be by your side no matter what, that you have lied to him every year on this date about why you’re in \“bad mood\”. The sick part is? I know him well enough to say that I know he wouldn’t judge me for it, if anything he’d be understanding and do anything in his power to console me. 
      
Every girls dream come true right? So then why can I not give him what he needs from me? Why can I not tell him why this day literally changes my entire persona? How I walk around in a haze as I relive the words, the smell of cheap beer and cigarettes, music coming thru some shitty old speakers, being called her \“friend\”. For some reason I’d rather hide the truth and convince the one person in the world who loves me more than life itself to leave me alone and \“I’ll be fine\”. Which translates to buying a bottle and drinking to try to numb the pain. 

About 2am you come out to tell me you love me and you’re sorry for upsetting me, when in reality you did nothing wrong. I accept as if I was expecting it and reply I love you too with such a sadness in my voice. You know why I got drunk tonight but you don’t want to call me out since you know deep down I’m fighting my own demons. You gently ask me when I’ll be to bed?, and I shrug and say “Soon, I guess”. Now almost 3 hours later here I sit, with an almost empty bottle, feeling even worse than before, hating myself for pushing you to the side when all you want is to be there for me, something I’ve always wanted but now I don’t know how to engage with. Instead I’ll drink until I think the pain is gone, just as I got the point I’ll stop. I’ll stumble to our bedroom where you lay stretched across our bed, holding my pillows close to your chest, and I’ll see this causing me to stop dead in my tracks. 

I see you laying there so peacefully, or at least appearing so, clinging to my pillow since I clearly fell short on my end of the \“coming to bed scenario\”. I look at you and begin to cry, I can’t give you one simple bit of my memory to eliminate the shit I caused tonight. I’ll try to slip into bed as gentle as possible without waking you, but it’s like you can sense me and you immediately wraps your arms around me, tucking your body as close to mine as you can possibly get, as if nothing even happened.

If I had one wish, I’d be as strong as you are. Maybe tomorrow will be my day, but not today. It’s getting time for the walk of shame down the hall tripping over your own feet and holding the walls as I stumble in. I want this to be the last time. She cannot keep this hold on me any longer.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr5.id,
created_at: DateTime.now - 590,
updated_at: DateTime.now - 590,
}) 

entry32 = Entry.create({
  general: "I spent some time reflecting about everything in general. I’m going to try to be more positive, even if I have to fake it until It becomes real and true positive thoughts. For some reason it feels like my emotional wounds have been reopened after a fight with a family member. All I think about is how angry they were, enough to take a swing at me and nail me in the back with their nails. It wasn’t pleasant, and I guess I don’t feel too trusting of them anymore to be honest. I forgive them but I don’t trust someone like that at all. 
  
I don’t believe they did wrong even if they tried to hit me, but I just don’t feel at all trusting of them. I just see their angry expression and feel their nails on my back whenever I think of them. I’m not sure if I’m a bad person for thinking of them this way even if they apologized.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr6.id,
created_at: DateTime.now - 610,
updated_at: DateTime.now - 610,
}) 

entry33 = Entry.create({
  general: "Funny that just yesterday I couldn’t get enough ice cream down my yap, and now I am forcing myself to eat a few crackers with cheese so I can take my 2nd antibiotic.  Last month it was an eye infection, now it’s a UTI.  UGH.  My immune system isn’t the greatest. 

So, I’m not sure if the meds are stirring things up but I feel like I have a wicked cold beginning.  This cough alone is enough to convince me.  You know that loud barking cough?  That’s me every 3-5 minutes. 

I’m changing the subject away from sickness for now.  

As a bit of a recluse, I really don’t have any friends.  I’m okay with that as I enjoy my own company.   I’m pretty boring and don’t seem to have much in common with the average person, but last week I did go for a walk with my neighbour.  She’s my age, married with kids (no children here, so my topics were limited in that department) but we had lots to talk about. We planned to make it a weekly thing but didn’t exchange contact info if it were to rain, which it was.  

Now I will be honest, one of the main reasons I don’t have friends is because I have been burned, backstabbed, used, and ditched way too many times.  I am a little nervous about making “friends”. However, I went over today and again had a good talk, it was nice to socialize again and I didn’t get a negative vibe from her at all.  Anyways, I really hope we can be good friends.

Well, that’s it.  Feeling rough tonight… maybe tomorrow I’ll feel better. ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr7.id,
created_at: DateTime.now - 22,
updated_at: DateTime.now - 22,
}) 

entry34 = Entry.create({
  general: "We are now right in the middle of the summerbreak. Lately I have been mostly hanging out with friends and stuff like that. It really sucks that me and my family dont have any special plans for the summer. As I am stuck here all of my friends are leaving one on one out on vacation or activities they are involved in. I on the other hand is just waiting for the summerbreak to pass faster so I can get back to school. Can’t say I’m a huge fan of school itself. It’s more like everyone is back when school starts. Friends are all around and school is basiclly the only thing that gives me something to do as my days pass. I wan’t to study for some reason too…

Also since my friends are very difficult to get in touch with lately, I have no other choice but to find something to do all by myself. Mostly I have been sitting alone by the river, og hanging around some kindergarden (mostly because Its free wifi). I could just sit home and waste my time on movies and games like I’ve done in the past summers. But I have changed alot and actually want to be outside. I love to be outside, maybe alittle to much. Also I love seeing all these strangers, and like waiting for stuff to happen. It’s kind of sad to be honest, I keep on waiting for people to come, I want to randomly meet someone and just like hang. But I can like sit at the same spot for hours upon hours without any luck. I sometimes even sit outside on rainy days in the cold waiting for something to happen or someone to come. Anything! Usually nothing ever does and It just ends up with me spending 5 hours alone by the river staring at the sky.

Also! Since I spend so much time by myself, I have also come to like improve myself? Does that make any sense? Like my style for example. I have always had an interessting sense of style, but never really botherd putting alot of effort into it. Now on the other hand, I have been using so so so much money on shopping that my parents are not exactly happy with it. But I have stopped, I have bought everything I need to improve my style and It is working as a success. Not only am I feeling alot more confident by putting more effort into what I wear: I also have the mindset “Dress to impress” or “Dress like your about to meet your future husband”. Which leeds to the next thing: 

MY CRUSH!!! Or can I really say it’s a crush anymore? It’s just like, I have come to find out that this guy is not as interessted as I am in him. And I have come to terms with myself that I guess he is better off as just a friend and that I should find someone else to obsess over. Which I am working on. I think the only reason why I get so happy when he texts me is because I basiclly have no one else. I love his personality and all, but it is pretty clear we will just be friends. Nothing more. I feel like I could almost be a little sister to him: Even though I can be more mature than this guy at times. 

Also, Chester Bennington died yesterday. I haven’t listend to Linkin Park for a while. But it is still extremly devestating as I basiclly grew up listening to them. Firstly because my parents and older siblings played them as I was younger and up through the years. But I mostly find this whole thing sad as hell, because his music was such a giant help to so many people. Music that saved lives, it is sad that we couldn’t return the favor. He was such a great guy aswell. A legend, I hope he gets one of those giant memorials: He deserves it. 

Now Imma head off to wasting more time. ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr8.id,
created_at: DateTime.now - 99,
updated_at: DateTime.now - 99,
}) 

entry35 = Entry.create({
  general: "I only start to write when I want to cry. That means I’m most honest with myself about my feelings, I guess. And right now I cannot comprehend the fact than I’ve only had 2 cycles of chemo and there are at least 4 (if I’m lucky, 6 if not) to go. It is not exactly unbearable, but it is getting worse every day.

Today I started feeling this weird tingling in my hands and feet, my legs and arms feel numb.. That’s new and scary. On top of my mysterious fever that keeps me in the hospital pumped with antibiotics. And I’ve been oh so weak, I can’t even take a normal walk, I don’t have enough energy for that. And these heat waves (well, they are not as bad as they used to be as I’m taking some medication but still noticeable) make me really uncomfortable, even my scalp (did I mention I’m bald now?) is all sweaty.

I can go on actually, but my point is I’m afraid to find out where my breaking point is. I’m not exactly afraid I’m going to hit it now but I can feel it there, it is there. How long till I get there? Will I get there? Will I be able to avoid it somehow? How? What should I do? I try to keep busy, stay positive, not concentrate on the bad staff, meditate when I can (not an easy thing to do in the hospital), talk to my therapist (which only happens once a month now since I’m rarely at home), I try to make friends with people in the same situation as me (and I’ve made huge progress, I’m very proud actually), I even requested a mentor from a special site where they find you a person who had the same type of cancer and the same kind of treatment.

And I’m asking myself if I’m doing enough. I so scared. I have this Instagram page where I write about all the news I have so as not to repeat the same things to everybody and also to find friends and some support (that is hard to come by, by the way) and I seem so positive there and I don’t know if it is in fact the truth. Am I lying and pretending to be someone I’m not? I feel closer to myself when I write here (such a cosy little site). Which one of these Kate is me? Both? Neither? I don’t know.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
created_at: DateTime.now - 190,
updated_at: DateTime.now - 190,
}) 

entry36 = Entry.create({
  general: "On Thursday I was in hospital with my younger brother he had a operation of cyst which went well but It get started very late time was nine but It took place around 12 so most of the time I was free and was waiting in lobby and I decided to read book Rich dad and poor dad I had read 30\" so far I quite like that book so far .

That’s all for the day.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr5.id,
created_at: DateTime.now - 380,
updated_at: DateTime.now - 380,
}) 

entry37 = Entry.create({
  general: "I haven’t written anything decent that’s unrelated to work in what feels like an eternity. Is personal blogging still alive? Who cares, though. I’m happy to have found this outlet for my words.

Today was not a good day. A rock icon, Chester Bennington of Linkin Park, committed suicide. I personally am not a big fan of the band before due to the genre but the incident still made a bigger impact on me than what I would have expected. I listened to their songs all day in the office and the lyrics hit me so deep, I can’t believe I did not listen to them much when Chester was still alive. The words spoke to me because I’m undergoing something heavy for quite sometime now. I’m not sure if this is depression. I don’t want to label it anything because I’m not a professional and I believe it’s irresponsible to use a term as heavy as depression casually. Although what I’ve been feeling is anything but casual. Earlier, I finally decided to take this seriously and handle it responsibly before I reach a slippery slope and the pain becomes too difficult for me to bear. I told myself I’ll undergo psychotherapy and find out once and for all why I’m in a perpetual state of emptiness.

This entry an ode to Chester. Until the very end, the words from their songs have helped someone verbalize the turmoil inside their mind.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr6.id,
created_at: DateTime.now - 160,
updated_at: DateTime.now - 160,
}) 

entry38 = Entry.create({
  general: "When you wake up in the morning what is the first thing you do? Do you go directly into the bathroom and start your make up process and your hair? Or do you lay in bed for that extra 10 minutes to decide how the day is going to go? I know I am the one who lays there and hopes and prays that nothing bad is going to happen. That today is going to be the day I’ll be strong enough to smile all day long and not lose my footing.

I always tell myself tomorrow is a new day. Tomorrow is going to be better, and usually that is not the case.

I wish there was a way to give someone else access to your brain and let them know exactly how you are feeling and doing. Most of the time I don’t want to be honest with anyone and actually tell them. Will they think I am broken or damaged? Will they feel sorry for me? I don’t want either of those so I go on and continue life like nothing is wrong.

They say your best friend is the one you can talk to about anything.. I struggle with that. I’m afraid to let anyone know the real me. Would they like me? Would they want to hang out with me still? I wish I knew the answers to these questions.

For now the thoughts continue… Till next time.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr7.id,
  created_at: DateTime.now - 59,
  updated_at: DateTime.now - 59,
}) 

entry39 = Entry.create({
  general: "I’ve so longed for a great mother/daughter relationship. It seems impossible. Biological Mom (BM) isn’t in my life at all and Adopted Mom (Mom), well… who knows. We have clashing personalities but I have the utmost respect for everything she did for us, when she could have done like everyone else and said “not my problem”. However, she raised us not knowing she had a severe hormone disorder so life growing up with her was rough. We’ve worked hard the past 10 years or so to build what I hoped was that great relationship but every time I start thinking we’re getting there, she does/says something to remind me that I’ll never be her “real” daughter. She doesn’t have any Biological kids, just me, my sister and brother.I don’t think she does it on purpose to hurt me but it does.

The past 3 years have seen a lot of loss in our family, specifically Mom’s family. Her Mom, sister and brother all passed away (as well as some close friends). I can understand her first calls being to that side of the family since we’re not really close with them. We’ve also seen the passing of my nephew shortly after his premature emergency birth. She and I were together when we received that awful phone call.:'( Yesterday her boyfriend was found floating in the community pond. It was an accident – he fell, hit his head and drowned. I feel absolutely horrible for her! And she feels horrible… the last conversation they had was an argument. Her first call was to her niece, again. Yes, I’m jealous of their relationship. They act like mother/daughter and I want what they have.

I’ll probably never tell her though. I wouldn’t know where to begin and what to say. She stares at me with critical eyes and it makes me forget everything I wanted to say. Then she thinks I’m stupid because all I can do is sit there and stare at her. She also tells me I’m wrong and that I misunderstand too much. I’m frustrated, among other things.

I can’t begin to imagine how she’s feeling right now. I want to go to her and be supportive (I live in another state) and I feel childish and selfish for dwelling on “she didn’t call me first”. It’s not just that though. There are other things that have compiled the situation to be what it is.", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr8.id,
  created_at: DateTime.now - 77,
  updated_at: DateTime.now - 77,
}) 
entry39 = Entry.create({
  general: "I’ve so lakjsdklfj", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: 63,
  created_at: DateTime.now - 61,
  updated_at: DateTime.now - 61,
}) 

entry40 = Entry.create({
  general: "Not feeling particularly better today, been thinking so much about you and our relationship, your business, the things you need to work on. I have insecurities, I’m afraid you’re already dating and found someone already. 

I’ve reread our conversation from last Monday and Friday, over and over again. Tears after tears, I would keep reading because I want to truly hear you. I’m sorry you’ve given me so many chances and yet each time I would not take it as seriously as I should of. Your need of space to work on your business, the type of lifestyle you want to live, gym, workout, eat healthy, the need for me to be independent and not rely on you for everything, the way I make you pay for our dinners. I am selfish, and disrespectful, I’m sorry to have put you through that.

I thought I was strong enough to break things off but our EDC trip brought back all the memories we have with each other. All the new experiences we created and shared with each other, I remember so vividly. From our first rave together, Beyond Wonderland 2014, to Ultra Miami 2015, Audio On the Bay, EDC 2015, Escape from Wonderland 2015, EDC 2016 and now EDC 2017, I had never wished to have spend it with anyone else other than you. 

Exactly 3 years ago from today, we started dating and it’s been a rollercoaster ride. You’ve taught me so many new things, were always by my side to pick me up physically and mentally. I regret for not truly hearing you and respecting you when you needed it most. When you went through difficult times with your Aunt’s trial, I’m sorry you felt I didn’t care, because I thought you just needed space. I’m bad at making people feel better, especially tough times like this. I hope you know you and your family were in my thoughts everyday during the trial.

I admit, when we met, I was 21, young, dumb, inexperienced. I didn’t have much to offer, except to bring you to experience new things, explore, see the world, try different drugs, but I believe that opened new realms and perspectives for us, both individually and together.

I loved you when I was 21, and I still love you till this day. If we were to be given another chance, I’d know what you would need from me…I’d be more supportive in the things you want and need to do, give you the space to accomplish your goals, and live a healthier lifestyle..

I may not have been vocal for the past few years, but I am very proud of your accomplishments, especially getting Ben and Alex into college. You got to see the follow through, and I’m sure it is gratifying and makes it all worth it. All those long and stressful nights, they could not have done it without you, and that’s what I love about you. You have a really kind heart, and you want to do right by people. ", 
  improvements: "",
  gratitude: "",
  public: true,
  writer_id: usr3.id,
  created_at: DateTime.now - 133,
  updated_at: DateTime.now - 133,
}) 













#### -------------------------------------- REFLECTIONS -------------------------------------- reflX
# refl = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
Reflection.delete_all
refl1 = Reflection.create({
  body: "Looking back now with what I now know, being with him was a huge mistake!",
  writer_id: usr3.id,
  entry_id: entry40.id
})
refl2 = Reflection.create({
  body: "I'm going to keep working on our relationship regardless of how hurt she sometimes makes me feel.",
  writer_id: usr8.id,
  entry_id: entry39.id
})
refl3 = Reflection.create({
  body: "Do I even know who the real me even is? I'm not quite sure about that.",
  writer_id: usr1.id,
  entry_id: entry7.id
})
refl4 = Reflection.create({
  body: "My brother is doing better. The recover has been slow, but he's getting there :)",
  writer_id: usr5.id,
  entry_id: entry36.id
})
refl5 = Reflection.create({
  body: "I think snapchat is a better medium that instagram to share my life with my friends. Gonna start snapping more.",
  writer_id: usr3.id,
  entry_id: entry35.id
})
refl6 = Reflection.create({
  body: "My BFF Tim (not related to Tim Gunn) told me I gotta start wearing more black if I wanna improve my fashion style. But I'm like, what if I end up loooking to goth?",
  writer_id: usr8.id,
  entry_id: entry34.id
})
refl7 = Reflection.create({
  body: "The more I think about it, the more I believe that I really need to get out. I can't just be alone and be a recluse and just assume I'm boring. Perhaps being around other people will inspire me to be more interesteing.",
  writer_id: usr7.id,
  entry_id: entry33.id
})
refl8 = Reflection.create({
  body: "Maybe with time I learn to fully trust them again. In the meantime perhaps I should't think beat myself up for not trusting them completely.",
  writer_id: usr6.id,
  entry_id: entry32.id
})
refl9 = Reflection.create({
  body: "I hope one day I can truly tell him what I need to express. I want to find a way to let me know that it's not just me in a bad mood. It's something else.",
  writer_id: usr5.id,
  entry_id: entry31.id
})
refl10 = Reflection.create({
  body: "I'm not sure how much longer I can resist Jack. I need to break things completely off with him.",
  writer_id: usr3.id,
  entry_id: entry3.id
})
# refl11 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl12 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl13 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl14 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl15 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl16 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl17 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl18 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl19 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })
# refl20 = Reflection.create({
#   body: "",
#   writer_id: usr.id,
#   entry_id: entry.id
# })













#### -------------------------------------- FOLLOWS -------------------------------------- followX
Follow.delete_all
follow1 = Follow.create({
  follower_id: usr1.id,
  followee_id: usr2.id,
})
follow2 = Follow.create({
  follower_id: usr1.id,
  followee_id: usr3.id,
})
follow3 = Follow.create({
  follower_id: usr1.id,
  followee_id: usr4.id,
})

# ---

follow4 = Follow.create({
  follower_id: usr2.id,
  followee_id: usr5.id,
})
follow5 = Follow.create({
  follower_id: usr2.id,
  followee_id: usr6.id,
})
follow6 = Follow.create({
  follower_id: usr2.id,
  followee_id: usr7.id,
})

# ---

follow7 = Follow.create({
  follower_id: usr3.id,
  followee_id: usr8.id,
})
follow8 = Follow.create({
  follower_id: usr3.id,
  followee_id: usr1.id,
})
follow9 = Follow.create({
  follower_id: usr3.id,
  followee_id: usr3.id,
})

# ---


follow10 = Follow.create({
  follower_id: usr4.id,
  followee_id: usr5.id,
})
follow11 = Follow.create({
  follower_id: usr4.id,
  followee_id: usr2.id,
})
follow12 = Follow.create({
  follower_id: usr4.id,
  followee_id: usr7.id,
})

# ---


follow13 = Follow.create({
  follower_id: usr5.id,
  followee_id: usr6.id,
})
follow14 = Follow.create({
  follower_id: usr5.id,
  followee_id: usr8.id,
})
follow15 = Follow.create({
  follower_id: usr5.id,
  followee_id: usr3.id,
})

# ---


follow16 = Follow.create({
  follower_id: usr6.id,
  followee_id: usr5.id,
})
follow17 = Follow.create({
  follower_id: usr6.id,
  followee_id: usr4.id,
})
follow18 = Follow.create({
  follower_id: usr6.id,
  followee_id: usr8.id,
})

# ---


follow19 = Follow.create({
  follower_id: usr7.id,
  followee_id: usr1.id,
})
follow20 = Follow.create({
  follower_id: usr7.id,
  followee_id: usr5.id,
})
follow21 = Follow.create({
  follower_id: usr7.id,
  followee_id: usr4.id,
})

# ---


follow22 = Follow.create({
  follower_id: usr8.id,
  followee_id: usr2.id,
})
follow23 = Follow.create({
  follower_id: usr8.id,
  followee_id: usr7.id,
})
follow24 = Follow.create({
  follower_id: usr8.id,
  followee_id: usr9.id,
})





#### -------------------------------------- GOALS -------------------------------------- goalX
Goal.delete_all 
goal1 = Goal.create({
  body: "buy milk and cookies for santa",
  done: false,
  entry_id: entry40.id,
})
goal2 = Goal.create({
  body: "finish styling the rest of my house",
  done: false,
  entry_id: entry38.id,
})
goal3 = Goal.create({
  body: "buy more black clothes",
  done: false,
  entry_id: entry35.id,
})
