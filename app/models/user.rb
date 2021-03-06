class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :entries,
    foreign_key: :writer_id,
    class_name: :Entry

  has_many :reflections,
    foreign_key: :writer_id,
    class_name: :Reflection
 
  has_many :bookmarks,
    foreign_key: :user_id,
    class_name: :Bookmark

  # a user has many other users they are following
  has_many :out_follows,
    foreign_key: :follower_id,
    class_name: :Follow

  # a user has many other users that follow them
  has_many :in_follows,
    foreign_key: :followee_id,
    class_name: :Follow

  has_many :followers,
    through: :in_follows,
    source: :follower
  
  has_many :followees, 
    through: :out_follows,
    source: :followee

  attr_reader :password
  after_initialize :ensure_session_token

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    while User.exists?(session_token: self.session_token)
      self.session_token = SecureRandom.urlsafe_base64
    end
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by_username(username)
    if @user && @user.is_password?(password)
      @user
    else
      nil
    end
  end
end
