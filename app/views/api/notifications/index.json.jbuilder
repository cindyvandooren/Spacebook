json.array!(@notifications) do |notification|
  json.partial!('notification', notification: notification)
end
