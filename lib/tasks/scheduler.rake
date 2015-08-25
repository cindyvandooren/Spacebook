desc "This task is called by the Heroku scheduler add-on"
task :reseed_db => :environment do
  heroku pg:reset DATABASE_URL --confirm spacebookproject
  heroku run rake db:migrate
  heroku run rake db:seed
end
