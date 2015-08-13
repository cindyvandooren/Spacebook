# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  last_note_time    :datetime
#  birthday          :date
#  interests         :string
#  home_planet       :string
#  planet_of_birth   :string
#  profile_img_id    :string
#  background_img_id :string
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
