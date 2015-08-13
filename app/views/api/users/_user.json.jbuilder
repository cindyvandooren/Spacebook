json.extract!(user, :id,
                    :username,
                    :last_note_time,
                    :birthday,
                    :interests,
                    :home_planet,
                    :planet_of_birth,
                    :profile_img_url,
                    :background_img_url,
                    :thumbnail_img_url
              )


if show_timeline_posts
  json.timeline_posts do
    json.array!(user.timeline_posts) do |timeline_post|
      json.partial!("api/posts/post", post: timeline_post)
      json.author_details do
        json.partial!("api/users/user", user: timeline_post.author, show_timeline_posts: false)
      end
    end
  end
end
