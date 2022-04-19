class User < ApplicationRecord
    has_secure_password
    has_many :photos
    has_many :catches

    validates :username, presence: true, uniqueness: true
end
