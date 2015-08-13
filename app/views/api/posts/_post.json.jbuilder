json.extract!(post, :id,
                    :author_id,
                    :timeline_id,
                    :body,
                    :created_at,
                    :updated_at
              )


# if show_author_details
#   json.author_details do
#     json.array!(post.author) do |author|
#       json.partial!('api/users/user', user: author, show_timeline_posts: false)
#     end
#   end
# end
