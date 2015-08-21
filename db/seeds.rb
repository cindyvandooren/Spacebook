# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# User 1
User.create!(
  username: "Vicci_Carillium",
  password: "password",
  birthday: Time.now + 500.years,
  interests: "Food, being cute, cuddling, hugging",
  home_planet: "Earth",
  planet_of_birth: "Raxacoricofallapatorius",
  profile_img_id: "image/upload/gi00dhssruvsb5qaskgv",
  background_img_id: "image/upload/gponnoiujrbe525fmyy6"
)

# User 2
User.create!(
  username: "ET",
  password: "password",
  birthday: Time.now - 35.years - 7.months - 23.days,
  interests: "Flying, riding bicycles, travelling to other galaxies",
  home_planet: "Brodo Asogi",
  planet_of_birth: "Brodo Asogi",
  profile_img_id: "image/upload/hdpljcvpy2eueusodnvi",
  background_img_id: "image/upload/ulaum0gwbbqqqdw1kjrv"
)

# User 3
User.create!(
  username: "Wall-e",
  password: "password",
  birthday: Time.now + 745.years + 3.months + 1.day,
  interests: "Eve-e, collecting garbage, looking at the stars",
  home_planet: "Earth",
  planet_of_birth: "Axiom",
  profile_img_id: "image/upload/kjdxtqniuooobbajfobu",
  background_img_id: "image/upload/v1439783452/btvjwnra0e27dskw8gmb.png"
)

# User 4
User.create!(
  username: "Eve-e",
  password: "password",
  birthday: Time.now + 780.years + 2.months + 7.days,
  home_planet: "Earth",
  planet_of_birth: "Axiom",
  interests: "Love, the color white, stargazing",
  profile_img_id: "image/upload/rpvtpb4xjptrg2zyzo0g",
  background_img_id: "image/upload/v1439783452/btvjwnra0e27dskw8gmb.png"
)

# User 5
User.create!(
  username: "Neytiri",
  password: "password",
  birthday: Time.now - 27.years - 6.months - 2.days,
  home_planet: "Pandora",
  planet_of_birth: "Pandora",
  interests: "Fighting viperwolves, visiting the tree of voices, flying, swinging ropes",
  profile_img_id: "image/upload/ylpr6zzyq7e3doqljt7f",
  background_img_id: "image/upload/gd0nfztluirdqslxjg7t"
)

# User 6
User.create!(
  username: "Jake",
  password: "password",
  birthday: Time.now - 30.years - 2.months - 7.days,
  home_planet: "Pandora",
  planet_of_birth: "Earth",
  interests: "Visiting the tree of voices, wandering through the forest, spending time with Neytiri",
  profile_img_id: "image/upload/lho2tjxpdpcnktssiydy",
  background_img_id: "image/upload/enhjbh1hzllzgglwxuqj"
)

# User 7
User.create!(
  username: "Dr_Grace",
  password: "password",
  birthday: Time.now - 47.years - 8.months - 9.days,
  home_planet: "Earth",
  planet_of_birth: "Earth",
  interests: "Research, coaching, visiting Pandora, reading, knitting",
  profile_img_id: "image/upload/xkmeplqxhbr0irgw2gl6",
  background_img_id: "image/upload/v3ep2tol2qkw67dm4a7w"
)

# User 8
User.create!(
  username: "Robot_Octopus",
  password: "password",
  birthday: Time.now - 27.years - 3.months - 11.days,
  interests: "Space cookies, hide and seek, sunglassess,
              Men in Black, The Astronauts Wive, Radiohead, Blof",
  home_planet: "Earth",
  planet_of_birth: "Venus",
  profile_img_id: "image/upload/dxhl5ir9ldawegozkkst",
  background_img_id: "image/upload/fngtjl6eiit6tsqwt8g5"
)

# User 9
User.create!(
  username: "Blon_Fel-Fotch",
  password: "password",
  birthday: Time.now + 67.years + 2.months + 1.day,
  interests: "Bowling, eating humans, propito trees, intergalactical politics",
  home_planet: "Raxacoricofallapatorius",
  planet_of_birth: "Raxacoricofallapatorius",
  profile_img_id: "image/upload/vjah30mdiiearzx8rdix",
  background_img_id: "image/upload/d99h1hhacpta0ouxxlpv"
)

# User 10
User.create!(
  username: "Sharlaveer-Slam",
  password: "password",
  birthday: Time.now + 78.years + 5.months + 29.day,
  interests: "Intergalactical politics, traveling, reading, costume play, swimming, war",
  home_planet: "Raxacoricofallapatorius",
  planet_of_birth: "Raxacoricofallapatorius",
  profile_img_id: "image/upload/rk0loqyorvts3pnjn27g",
  background_img_id: "image/upload/p3qhuom0dkbvc5o9po50"
)

# User 11
User.create!(
  username: "The_Doctor",
  password: "password",
  birthday: Time.now - 2000.years + 3.months + 5.days,
  interests: "History, time traveling, Rose, sonic screwdrivers, Earth, cleaning the Tardis",
  planet_of_birth: "Gallifrey",
  profile_img_id: "image/upload/doekq2glsdw6xz4ug5a7",
  background_img_id: "image/upload/ssi66bld1k0px0wycpgm"
)

# User 12
User.create!(
  username: "Alf",
  password: "password",
  birthday: Time.now - 40.years - 11.months + 3.days,
  interests: "Cats, reading the newspaper, visiting family",
  planet_of_birth: "Melmac",
  home_planet: "Earth",
  profile_img_id: "image/upload/mxrckxwq4n3js3z0zcen",
  background_img_id: "image/upload/ulaum0gwbbqqqdw1kjrv"
)

# User 13
User.create!(
  username: "Amy_Pond",
  password: "password",
  birthday: Time.now - 26.years - 5.months - 9.days,
  interests: "Journalism, Scotland, The Doctor, space travel, meeting Vincent van Gogh",
  planet_of_birth: "Earth",
  home_planet: "Earth",
  profile_img_id: "image/upload/xrn7altusqbd3jg1rrm8",
  background_img_id: "image/upload/hpfbvmsnqm1wl1u5qq8z"
)

# User 14
User.create!(
  username: "Cyberman",
  password: "password",
  birthday: Time.now + 890.years + 4.months + 2.days,
  interests: "Meeting Daleks",
  planet_of_birth: "Mondas",
  home_planet: "Earth",
  profile_img_id: "image/upload/zvp3smio3ewgjuv7ris2",
  background_img_id: "image/upload/hurnlk8ctus8vfsrzwzk"
)

# User 15
User.create!(
  username: "Yoda",
  password: "password",
  birthday: Time.now + 678.years - 2.months + 24.days,
  interests: "Green lightsabers, Jedi",
  home_planet: "Dagobah",
  profile_img_id: "image/upload/jukkxojjzufyqnaohixi",
  background_img_id: "image/upload/djto14agnizjz93wlrw0"
)

# User 16
User.create!(
  username: "Mr_Spock",
  password: "password",
  birthday: Time.now + 215.years + 3.months + 6.days,
  interests: "Science, computers, Starfleet",
  planet_of_birth: "Vulcan",
  home_planet: "Romulus",
  profile_img_id: "image/upload/tfkoxggcjmsqbpamvsif",
  background_img_id: "image/upload/jp1gavsqdq0lzjya5qrh"
)

# User 17
User.create!(
  username: "Picard",
  password: "password",
  birthday: Time.now + 195.years + 2.months + 4.days,
  interests: "Diplomacy, tactics, Starfleet, leadership",
  planet_of_birth: "Earth",
  home_planet: "Earth",
  profile_img_id: "image/upload/ilxiz2jk6jmzkd8ifue9",
  background_img_id: "image/upload/jp1gavsqdq0lzjya5qrh"
)

# User 18
User.create!(
  username: "James_Kirk",
  password: "password",
  birthday: Time.now + 198.years + 4.months + 7.days,
  planet_of_birth: "Earth",
  home_planet: "Earth",
  interests: "Antiques, A Tale of Two Cities, space",
  profile_img_id: "image/upload/pldilpgtb4pnm7koxa7w",
  background_img_id: "image/upload/jp1gavsqdq0lzjya5qrh"
)

# User 19
User.create!(
  username: "Kang",
  password: "password",
  birthday: Time.now,
  interests: "Rigellian, weapons, spaceships",
  home_planet: "Earth",
  planet_of_birth: "Rigel IV",
  profile_img_id: "image/upload/v1440127584/bplpucfhgnyh9fv04zgg.jpg",
  background_img_id: "image/upload/nusd59cjpgfgefds7pym"
)

## Continue building seed data!
Friendship.create!(own_id: 1, friend_id: 8)
Friendship.create!(own_id: 1, friend_id: 9)
Friendship.create!(own_id: 1, friend_id: 10)
Friendship.create!(own_id: 1, friend_id: 11)
Friendship.create!(own_id: 1, friend_id: 13)
Friendship.create!(own_id: 1, friend_id: 14)
Friendship.create!(own_id: 2, friend_id: 3)
Friendship.create!(own_id: 2, friend_id: 8)
Friendship.create!(own_id: 2, friend_id: 12)
Friendship.create!(own_id: 2, friend_id: 15)
Friendship.create!(own_id: 3, friend_id: 2)
Friendship.create!(own_id: 3, friend_id: 4)
Friendship.create!(own_id: 3, friend_id: 8)
Friendship.create!(own_id: 3, friend_id: 15)
Friendship.create!(own_id: 3, friend_id: 19)
Friendship.create!(own_id: 4, friend_id: 3)
Friendship.create!(own_id: 4, friend_id: 8)
Friendship.create!(own_id: 4, friend_id: 19)
Friendship.create!(own_id: 5, friend_id: 6)
Friendship.create!(own_id: 5, friend_id: 7)
Friendship.create!(own_id: 5, friend_id: 12)
Friendship.create!(own_id: 6, friend_id: 5)
Friendship.create!(own_id: 6, friend_id: 7)
Friendship.create!(own_id: 7, friend_id: 5)
Friendship.create!(own_id: 7, friend_id: 6)
Friendship.create!(own_id: 8, friend_id: 1)
Friendship.create!(own_id: 8, friend_id: 2)
Friendship.create!(own_id: 8, friend_id: 3)
Friendship.create!(own_id: 8, friend_id: 4)
Friendship.create!(own_id: 9, friend_id: 1)
Friendship.create!(own_id: 9, friend_id: 10)
Friendship.create!(own_id: 9, friend_id: 11)
Friendship.create!(own_id: 9, friend_id: 13)
Friendship.create!(own_id: 10, friend_id: 14)
Friendship.create!(own_id: 10, friend_id: 1)
Friendship.create!(own_id: 10, friend_id: 9)
Friendship.create!(own_id: 10, friend_id: 11)
Friendship.create!(own_id: 11, friend_id: 1)
Friendship.create!(own_id: 11, friend_id: 9)
Friendship.create!(own_id: 11, friend_id: 10)
Friendship.create!(own_id: 11, friend_id: 13)
Friendship.create!(own_id: 11, friend_id: 14)
Friendship.create!(own_id: 12, friend_id: 2)
Friendship.create!(own_id: 12, friend_id: 5)
Friendship.create!(own_id: 13, friend_id: 1)
Friendship.create!(own_id: 13, friend_id: 9)
Friendship.create!(own_id: 13, friend_id: 11)
Friendship.create!(own_id: 14, friend_id: 1)
Friendship.create!(own_id: 14, friend_id: 10)
Friendship.create!(own_id: 14, friend_id: 11)
Friendship.create!(own_id: 15, friend_id: 2)
Friendship.create!(own_id: 15, friend_id: 3)
Friendship.create!(own_id: 16, friend_id: 17)
Friendship.create!(own_id: 16, friend_id: 18)
Friendship.create!(own_id: 17, friend_id: 16)
Friendship.create!(own_id: 17, friend_id: 18)
Friendship.create!(own_id: 18, friend_id: 16)
Friendship.create!(own_id: 18, friend_id: 17)
Friendship.create!(own_id: 19, friend_id: 3)
Friendship.create!(own_id: 19, friend_id: 4)

Post.create!(
  author_id: 2,
  timeline_id: 2,
  body: "ET phone home"
)

Post.create!(
  author_id: 1,
  timeline_id: 1,
  body: "I need hugs, lots of hugs!"
)

Post.create!(
  author_id: 2,
  timeline_id: 2,
  body: "Elliott! Elliott!"
)

Post.create!(
  author_id: 18,
  timeline_id: 18,
  body: "Genius doesn’t work on an assembly line basis... You can’t simply say, ‘Today I will be brilliant.'"
)

Post.create!(
  author_id: 4,
  timeline_id: 3,
  body: "I miss you!"
)

Post.create!(
  author_id: 3,
  timeline_id: 3,
  body: "I don't want to survive, I want to live"
)

Post.create!(
  author_id: 3,
  timeline_id: 3,
  body: "The stars look like they're so close, you could reach out and touch them."
)

Post.create!(
  author_id: 4,
  timeline_id: 3,
  body: "You're my Wall-e and I'm your Eve."
)

Post.create!(
  author_id: 3,
  timeline_id: 3,
  body: "Sometimes things look a lot closer than they are."
)

Post.create!(
  author_id: 3,
  timeline_id: 4,
  body: "You're my Eve-e and I'm your Wall-e."
)

Post.create!(
  author_id: 3,
  timeline_id: 8,
  body: "So what have you been doing lately?"
)


Post.create!(
  author_id: 1,
  timeline_id: 8,
  body: "Do you want to hang out some time?"
)

Post.create!(
  author_id: 7,
  timeline_id: 7,
  body: "In Pandora there's some kind of communication between the roots of the trees. Like the synapses between neurons. Each tree has ten to the fourth connections to the trees around it, and there are ten to the twelfth trees on Pandora..."
)

Post.create!(
  author_id: 4,
  timeline_id: 4,
  body: "You Earthlings should take better care of the planet!"
)



Post.create!(
  author_id: 5,
  timeline_id: 5,
  body: "Sky People can not learn, they do not see."
)

Post.create!(
  author_id: 11,
  timeline_id: 11,
  body: "The universe is big. It’s vast and complicated and ridiculous. And sometimes, very rarely, impossible things just happen and we call them miracles."
)

Post.create!(
  author_id: 5,
  timeline_id: 5,
  body: "Our great mother Eywa protects the balance of life."
)

Post.create!(
  author_id: 5,
  timeline_id: 6,
  body: "I see you!"
)

Post.create!(
  author_id: 6,
  timeline_id: 6,
  body: "I grew up hearing about Pandora. I never figured I'd be going there."
)

Post.create!(
  author_id: 6,
  timeline_id: 6,
  body: "I’m a warrior... of the Jarhead clan"
)

Post.create!(
  author_id: 6,
  timeline_id: 6,
  body: "Sometimes your whole life boils down to one insane move."
)

Post.create!(
  author_id: 7,
  timeline_id: 7,
  body: "Where's my cigarette?"
)

Post.create!(
  author_id: 3,
  timeline_id: 19,
  body: "How's life in Springfield?"
)

Post.create!(
  author_id: 7,
  timeline_id: 7,
  body: "I need to get some samples."
)

Post.create!(
  author_id: 12,
  timeline_id: 12,
  body: "Oreos!?! My kinda people!"
)

Post.create!(
  author_id: 7,
  timeline_id: 6,
  body: "Is the avatar safe?"
)

Post.create!(
  author_id: 6,
  timeline_id: 7,
  body: "The avatar is safe. You won't believe where I am."
)

Post.create!(
  author_id: 8,
  timeline_id: 8,
  body: "Have you ever had a woman with 8 hands to satisfy all your needs ... like cooking and cleaning?"
)


Post.create!(
  author_id: 8,
  timeline_id: 1,
  body: "I keep an eye on you."
)

Post.create!(
  author_id: 11,
  timeline_id: 11,
  body: "You want weapons? Books! The best weapons in the world!"
)

Post.create!(
  author_id: 11,
  timeline_id: 11,
  body: "I always rip out the last page of a book then it doens't have to end. I hate endings."
)

Post.create!(
  author_id: 11,
  timeline_id: 11,
  body: "Do what I do. Hold tight and pretend it’s a plan!"
)

Post.create!(
  author_id: 11,
  timeline_id: 9,
  body: "So, why are you visiting Earth?"
)

Post.create!(
  author_id: 11,
  timeline_id: 10,
  body: "Long time no see."
)

Post.create!(
  author_id: 13,
  timeline_id: 11,
  body: "I started to think you were just a madman with a box."
)

Post.create!(
  author_id: 18,
  timeline_id: 18,
  body: "Conquest is easy. Control is not."
)

Post.create!(
  author_id: 15,
  timeline_id: 15,
  body: "Truly wonderful, the mind of a child is."
)

Post.create!(
  author_id: 11,
  timeline_id: 13,
  body: "There’s something you’d better understand about me ‘cause it’s important, and one day your life may depend on it: I am definitely a mad man with a box!"
)

Post.create!(
  author_id: 13,
  timeline_id: 11,
  body: "Why do you keep coming back for us?"
)

Post.create!(
  author_id: 11,
  timeline_id: 13,
  body: "Have you seen my sonic screwdriver?"
)

Post.create!(
  author_id: 11,
  timeline_id: 1,
  body: "Have you seen my sonic screwdriver?"
)

Post.create!(
  author_id: 11,
  timeline_id: 9,
  body: "Have you seen my sonic screwdriver?"
)

Post.create!(
  author_id: 11,
  timeline_id: 10,
  body: "Have you seen my sonic screwdriver?"
)

Post.create!(
  author_id: 11,
  timeline_id: 14,
  body: "Have you seen my sonic screwdriver?"
)

Post.create!(
  author_id: 12,
  timeline_id: 12,
  body: "I've decided to reveal myself to the world.  This way I can meet new people, travel, see a Grateful Dead concert."
)

Post.create!(
  author_id: 19,
  timeline_id: 19,
  body: "I'm starting to think 'Operation Enduring Occupation' was a bad idea."
)

Post.create!(
  author_id: 12,
  timeline_id: 12,
  body: "I learned one thing about eating jigsaw puzzles...an hour later, you're hungry again."
)

Post.create!(
  author_id: 19,
  timeline_id: 19,
  body: "It's true, we are aliens. But what are you going to do about it? It's a two-party system. You have to vote for one of us."
)

Post.create!(
  author_id: 12,
  timeline_id: 12,
  body: "I tried to puree a rock...it didn't work."
)

Post.create!(
  author_id: 13,
  timeline_id: 13,
  body: "There's a man who's never going to let us down, and not even an army can get..."
)

Post.create!(
  author_id: 13,
  timeline_id: 13,
  body: "Time can be rewritten."
)

Post.create!(
  author_id: 10,
  timeline_id: 11,
  body: "Even if I had it, I wouldn't tell you."
)

Post.create!(
  author_id: 14,
  timeline_id: 14,
  body: "Everyone will receive a free upgrade. You will become like us."
)

Post.create!(
  author_id: 9,
  timeline_id: 11,
  body: "You should take better care of your stuff."
)

Post.create!(
  author_id: 15,
  timeline_id: 15,
  body: "Do. Or do not. There is no try."
)

Post.create!(
  author_id: 15,
  timeline_id: 15,
  body: "Fear is the path to the dark side... fear leads to anger... anger leads to hate... hate leads to suffering."
)

Post.create!(
  author_id: 16,
  timeline_id: 16,
  body: "Live long and prosper."
)

Post.create!(
  author_id: 4,
  timeline_id: 4,
  body: "Wall-e is my favorite Spacebook friend!"
)

Post.create!(
  author_id: 16,
  timeline_id: 16,
  body: "In critical moments men sometimes see exactly what they wish to see."
)

Post.create!(
  author_id: 16,
  timeline_id: 16,
  body: "Change is the essential process of all existence."
)


Post.create!(
  author_id: 17,
  timeline_id: 17,
  body: "Let's make sure history never forgets the name... Enterprise."
)

Post.create!(
  author_id: 17,
  timeline_id: 17,
  body: "Time is a companion that goes with us on a journey. It reminds us to cherish each moment, because it will never come again. What we leave behind is not as important as how we have lived."
)

Post.create!(
  author_id: 18,
  timeline_id: 18,
  body: "A little suffering is good for the soul."
)

Post.create!(
  author_id: 19,
  timeline_id: 3,
  body: "Life in Springfield is ok. How are you doing?"
)

Post.create!(
  author_id: 19,
  timeline_id: 19,
  body: "My fellow Americans. As a young boy, I dreamed of being a baseball; but tonight I say, we must move forward, not backward; upward, not forward; and always twirling, twirling, twirling towards freedom!"
)

Post.create!(
  author_id: 5,
  timeline_id: 5,
  body: "All energy is only borrowed, at some point we have to return it."
)

Post.create!(
  author_id: 11,
  timeline_id: 14,
  body: "Will you get an upgrade too?"
)
