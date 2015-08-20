json.extract!(user, :id,
                    :username,
                    :last_note_time,
                    :birthday,
                    :interests,
                    :home_planet,
                    :planet_of_birth,
                    :profile_img_url,
                    :background_img_url,
                    :thumbnail_img_url,
                    :tiny_thumbnail_img_url
              )

json.is_a_friend current_user.friends.pluck(:friend_id).include?(user.id)
json.is_invited current_user.sent_invitations.pluck(:invitee_id).include?(user.id) || current_user.received_invitations.pluck(:inviter_id).include?(user.id)

json.notifications do
  json.array!(user.show_notifications) do |notification|
    json.partial!("api/notifications/notification", notification: notification)
  end
end

json.friends do
  json.array!(user.new_friends) do |friend|
    json.partial!("api/users/limited_info", user: friend)
  end
end

json.timeline_posts do
  json.array!(user.timeline_posts) do |post|
    json.partial!("api/posts/post", post: post)
  end
end

json.invitations do
  json.array!(user.all_invitations) do |invitation|
    json.partial!("api/invitations/invitation", invitation: invitation)
  end
end
