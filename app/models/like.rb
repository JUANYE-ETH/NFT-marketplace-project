class Like < ApplicationRecord
    belongs_to :nft
    belongs_to :user

    validates :user_id, presence: true
    validates :nft_id, presence: true
end
