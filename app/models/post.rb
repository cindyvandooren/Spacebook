class Post < ActiveRecord::Base
  validates :author, :receiver, :body, presence: true
  validates :body, length: { maximum: 240 }

  belongs_to :author, class_name: :User
  belongs_to :receiver,
             class_name: :User,
             primary_key: :id,
             foreign_key: :wall_id
end
