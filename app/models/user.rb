class User < ApplicationRecord
    has_secure_password
    has_many :nfts
    has_many :likes
    has_many :comments
    has_many :nft_collection, through: :nfts

    
    validates :username, presence: true, uniqueness: true, length: { minimum: 3 }
    # validates :email, presence: true, uniqueness: true
end
