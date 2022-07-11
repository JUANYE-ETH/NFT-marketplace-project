class AddNftCollectionToNfts < ActiveRecord::Migration[6.1]
  def change
    add_column :nfts, :nft_collection_id, :integer
  end
end
