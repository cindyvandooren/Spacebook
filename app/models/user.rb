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

class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { maximum: 16}
  validates :username, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token
  before_save :have_profile_img_id
  before_save :have_background_img_id

  has_many :posts, foreign_key: :author_id, dependent: :destroy
  has_many :timeline_posts,
           class_name: :Post,
           primary_key: :id,
           foreign_key: :timeline_id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def have_profile_img_id
    self.profile_img_id ||= "image/upload/c_fill,w_168/v1439329855/alien_head_img.jpg"
  end

  def have_background_img_id
    self.background_img_id ||= "image/upload/c_fill,h_273,w_851/v1439329874/blue_space_background.jpg"
  end

  def profile_img_url
    final_profile_img_id = profile_img_id.gsub(
      'image/upload',
      'image/upload/c_fill,h_168,w_168'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_profile_img_id
  end

  def thumbnail_img_url
    final_thumbnail_img_id = profile_img_id.gsub(
      'image/upload',
      'image/upload/c_fill,h_40,w_40'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_thumbnail_img_id
  end

  def background_img_url
    final_background_img_id = background_img_id.gsub(
      'image/upload',
      'image/upload/c_fill,h_273,w_851'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_background_img_id
  end

  def tiny_thumbnail_img_url
    final_tiny_thumbnail_img_id = profile_img_id.gsub(
      'image/upload',
      'image/upload/c_fill,h_30,w_30'
    )

    "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_tiny_thumbnail_img_id
  end
end
