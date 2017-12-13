class User < ApplicationRecord
  validates_uniqueness_of :username
  has_secure_password
  has_secure_token :auth_token

  def invalidate_token
    update_columns(auth_token: nil)
  end

  def self.validate_login(username, password)
    user = find_by(username: username)
    user if user && user.authenticate(password)
  end
end
