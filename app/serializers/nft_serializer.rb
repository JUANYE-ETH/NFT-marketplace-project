class NftSerializer < ActiveModel::Serializer
  attributes :id, :nft_name, :description, :price, :user_id, :image, :created_at, :nft_collection_id

  belongs_to :user
  belongs_to :nft_collection
  has_many :comments 
  has_many :likes
  
  # def user_can_modify
  #   current_user.admin? || current_user == self.object.user
  # end

end
