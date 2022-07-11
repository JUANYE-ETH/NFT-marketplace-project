class NftCollection < ApplicationRecord
    has_many :nfts
    has_many :users, through: :nfts
end
