class Comment < ApplicationRecord
    belongs_to :nft
    belongs_to :user

    validates :content, presence: true, length: {minimum: 3}
    validates :user_id, presence: true
    validates :nft_id, presence: true
end
