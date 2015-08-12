class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :username, length: { maximum: 16}
  validates :username, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token
  # before_save :ensure_profile_img_id
  # before_save :ensure_background_img_id

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
  #
  # def ensure_profile_img_id
  #   self.profile_img_id ||= "image/upload/c_fit,w_40/v1439329855/alien_head_img.jpg"
  # end
  #
  # def ensure_background_img_id
  #   self.background_img_id ||= "image/upload/c_fill,h_273,w_851/v1439329874/blue_space_background.jpg"
  # end

  # def profile_img_url
  #   final_profile_img_id = profile_img_id.sub(
  #   'image/upload',
  #   'image/upload/c_fit,w_168'
  #   )
  #
  #   "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_profile_img_id
  # end
  #
  # def thumbnail_img_url
  #   final_thumbnail_img_id = profile_img_id.sub(
  #   'image/upload',
  #   'image/upload/c_fit,w_40'
  #   )
  #
  #   "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_thumbnail_img_id
  # end
  #
  # def background_img_url
  #   final_background_img_id = background_img_id.sub(
  #   'image/upload',
  #   'image/upload/c_fill,h_273,w_851'
  #   )
  #
  #   "http://res.cloudinary.com/#{ENV['CLOUD_NAME']}/" + final_background_img_id
  # end
end
