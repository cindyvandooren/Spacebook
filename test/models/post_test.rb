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

require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
