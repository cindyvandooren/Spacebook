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
  interests: "Space Cookies, Hide and Seek, Sunglassess,
              Men in Black, The Astronauts Wive, Radiohead, Blof",
  home_planet: "Earth",
  planet_of_birth: "Venus",
  profile_img_id: "image/upload/v1439592903/alien_voor_Cindy_x8vmdf.jpg",
  background_img_id: "image/upload/v1439593323/Achtergrondplaatje_voor_Cindy_def_a7cdw7.jpg"
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
  interests: "Food, Being Cute, Cuddling, Hugging",
  home_planet: "Earth",
  planet_of_birth: "Raxacoricofallapatorius",
  profile_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439609314/alien2_d4aune.jpg",
  background_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439609201/alienlandscape3_qinqgw.jpg"
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
  interests: "Flying, Riding Bicycles, Travelling to Other Galaxies",
  home_planet: "Brodo Asogi",
  planet_of_birth: "Brodo Asogi",
  profile_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439609871/ET_profile_h73jkc.jpg",
  background_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439609905/ET_smwro0.jpg"
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
  interests: "Eve e, Collecting Garbage, Looking at the Stars",
  profile_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439610103/walle_profile_exwgef.jpg",
  background_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439610212/eve_e_background_obuoj5.png"
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
  interests: "Love, White, Stargazing",
  profile_img_id: "http://res.cloudinary.com/dpoog0ebg/image/upload/v1439610526/eve_e_profile_xpo8fl.jpg",
  background_img_id: "https://cloudinary.com/console/media_library#/dialog/image/upload/eve_e_background_b5lhnc"
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
