json.extract!(post, :id,
                    :author_id,
                    :timeline_id,
                    :body
              )

json.created_at time_ago_in_words(post.created_at)
json.receiver_name post.receiver.username

json.author_details do
  json.partial!("api/users/user", user: post.author, show_timeline_posts: false)
end
