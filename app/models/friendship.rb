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
  validates :owner, :friend, presence: true

  belongs_to :owner,
             class_name: :User,
             primary_key: :id,
             foreign_key: :own_id

  belongs_to :friend,
             class_name: :User,
             primary_key: :id,
             foreign_key: :friend_id
end
