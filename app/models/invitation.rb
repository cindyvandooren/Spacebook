# == Schema Information
#
# Table name: invitations
#
#  id         :integer          not null, primary key
#  inviter_id :integer          not null
#  invitee_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Invitation < ActiveRecord::Base
  validates :inviter, :invitee, presence: true

  belongs_to :inviter,
             class_name: :User,
             primary_key: :id,
             foreign_key: :inviter_id

  belongs_to :invitee,
             class_name: :User,
             primary_key: :id,
             foreign_key: :invitee_id
end
