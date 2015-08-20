json.extract!(friendship, :id, :own_id, :friend_id)

json.thumbnail_img_url friendship.friend.thumbnail_img_url
json.username friendship.friend.username
