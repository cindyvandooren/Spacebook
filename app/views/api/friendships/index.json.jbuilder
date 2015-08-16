json.array!(@friendships) do |friendship|
  json.partial!('friendship', friendship: friendship)
end
