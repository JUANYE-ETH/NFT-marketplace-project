class Nft < ApplicationRecord
    belongs_to :user
    belongs_to :nft_collection
    has_many :comments
    has_many :likes

    validates :nft_name, presence: true
    validates :description, presence: true
    validates :image, presence: true

    def self.alpha
        self.order(:nft_name)
    end
end
