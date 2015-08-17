# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  username: "Robot_Octopussy",
  password: "password",
  birthday: Time.now - 27.years - 3.months - 11.days,
  interests: "Space cookies, hide and seek, sunglassess,
              Men in Black, The Astronauts Wive, Radiohead, Blof",
  home_planet: "Earth",
  planet_of_birth: "Venus",
  profile_img_id: "image/upload/vrgrnfvl5utebidrpj4x",
  background_img_id: "image/upload/fngtjl6eiit6tsqwt8g5"
)

Post.create!(
  author_id: 1,
  timeline_id: 1,
  body: "Have you ever had a woman with 8 hands to satisfy all your needs ..., like cooking and cleaning?"
)

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

Post.create!(
  author_id: 2,
  timeline_id: 2,
  body: "I need hugs, lots of hugs!"
)

Post.create!(
  author_id: 1,
  timeline_id: 2,
  body: "I keep an eye on you."
)

Post.create!(
  author_id: 1,
  timeline_id: 2,
  body: "I love you so much that I wanna feel your brain with my tentacles."
)

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

Post.create!(
  author_id: 3,
  timeline_id: 3,
  body: "ET phone home"
)

User.create!(
  username: "Wall-e",
  password: "password",
  birthday: Time.now + 745.years + 3.months + 1.day,
  interests: "Eve e, collecting garbage, looking at the stars",
  home_planet: "Earth",
  planet_of_birth: "Axiom",
  profile_img_id: "image/upload/kjdxtqniuooobbajfobu",
  background_img_id: "image/upload/v1439783452/btvjwnra0e27dskw8gmb.png"
)

Post.create!(
  author_id: 4,
  timeline_id: 4,
  body: "I don't want to survive, I want to live"
)

Post.create!(
  author_id: 4,
  timeline_id: 4,
  body: "The stars look like they're so close, you could reach out and touch them."
)

Post.create!(
  author_id: 4,
  timeline_id: 4,
  body: "Sometimes things look a lot closer than they are."
)

User.create!(
  username: "Eve-e",
  password: "password",
  birthday: Time.now + 780.years + 2.months + 7.days,
  home_planet: "Earth",
  planet_of_birth: "Axiom",
  interests: "Love, white, stargazing",
  profile_img_id: "image/upload/rpvtpb4xjptrg2zyzo0g",
  background_img_id: "image/upload/v1439783452/btvjwnra0e27dskw8gmb.png"
)

Post.create!(
  author_id: 5,
  timeline_id: 4,
  body: "You're my Wall-e and I'm your Eve"
)

Post.create!(
  author_id: 5,
  timeline_id: 5,
  body: "Wall-e is my favorite Spacebook friend!"
)

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

Post.create!(
  author_id: 8,
  timeline_id: 7,
  body: "I see you!"
)

Post.create!(
  author_id: 8,
  timeline_id: 8,
  body: "I grew up hearing about Pandora. I never figured I'd be going there."
)

User.create!(
  username: "Dr. Grace",
  password: "password",
  birthday: Time.now - 47.years - 8.months - 9.days,
  home_planet: "Earth",
  planet_of_birth: "Earth",
  interests: "Research, coaching, visiting Pandora, reading, knitting",
  profile_img_id: "image/upload/xkmeplqxhbr0irgw2gl6",
  background_img_id: "image/upload/v3ep2tol2qkw67dm4a7w"
)

Post.create!(
  author_id: 9,
  timeline_id: 8,
  body: "Is the avatar safe?"
)

Post.create!(
  author_id: 8,
  timeline_id: 9,
  body: "The avatar is safe. You won't believe where I am."
)

Friendship.create!(own_id: 4, friend_id: 5)
Friendship.create!(own_id: 5, friend_id: 4)
Friendship.create!(own_id: 9, friend_id: 8)
Friendship.create!(own_id: 8, friend_id: 9)
Friendship.create!(own_id: 9, friend_id: 7)
Friendship.create!(own_id: 7, friend_id: 9)
