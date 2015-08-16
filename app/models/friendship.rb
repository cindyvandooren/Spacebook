# == Schema Information
#
# Table name: friendships
#
#  id         :integer          not null, primary key
#  own_id     :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friendship < ActiveRecord::Base
end
