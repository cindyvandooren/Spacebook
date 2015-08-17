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
