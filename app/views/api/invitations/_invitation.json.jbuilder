json.extract!(invitation, :id, :inviter_id, :invitee_id)

json.created_at time_ago_in_words(invitation.created_at)

json.inviter_details do
  json.partial!("api/users/limited_info", user: invitation.inviter)
end

json.invitee_details do
  json.partial!("api/users/limited_info", user: invitation.invitee)
end
