class CommentSerializer < ActiveModel::Serializer
  attributes :id, :nft_id, :content, :user_id

  belongs_to :user
end
