class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.string :nft_name
      t.string :description
      t.integer :price
      t.integer :user_id
      t.string :image

      t.timestamps
    end
  end
end
