json.array!(@users) do |user|
  json.partial!('user', user: user, show_timeline_posts: false)
end
