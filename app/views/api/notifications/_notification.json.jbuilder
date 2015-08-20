json.extract!(notification, :id,
                            :user_id,
                            :body
              )
              
json.created_at time_ago_in_words(notification.created_at)
