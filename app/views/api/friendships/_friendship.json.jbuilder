json.extract!(friendship, :id, :own_id, :friend_id)

json.created_at time_ago_in_words(friendship.created_at)

json.friend_details do
  json.partial!("api/users/limited_info", user: friendship.friend)
end
