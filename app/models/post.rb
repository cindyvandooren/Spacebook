# == Schema Information
#
# Table name: posts
#
#  id          :integer          not null, primary key
#  author_id   :integer          not null
#  timeline_id :integer          not null
#  body        :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Post < ActiveRecord::Base
  validates :author, :receiver, :body, presence: true
  validates :body, length: { maximum: 240 }

  belongs_to :author, class_name: :User

  belongs_to :receiver,
             class_name: :User,
             primary_key: :id,
             foreign_key: :timeline_id
end
