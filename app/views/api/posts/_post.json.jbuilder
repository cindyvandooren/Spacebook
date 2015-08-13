json.extract!(post, :id,
                    :author_id,
                    :timeline_id,
                    :body,
                    :created_at,
                    :updated_at
              )

json.author_details do
  json.partial!("api/users/user", user: post.author, show_timeline_posts: false)
end
