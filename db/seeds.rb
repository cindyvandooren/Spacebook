# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


User.create!(
  username: "Robotine_Octopussy",
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
# Hi lovely guy, have you ever had a woman with 8 hands to satify all your needs...... like cooking and cleaning?
# I keep an eye on you
# I love you so much that I wanna feel your brain with my tentacles.
