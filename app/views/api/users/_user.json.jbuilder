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

json.is_a_friend current_user.friends.include?(user.id)
json.invited current_user.received_invitations.include?(user.id) || current_user.sent_invitations.include?(user.id)
