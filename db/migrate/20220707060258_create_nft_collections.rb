class CreateNftCollections < ActiveRecord::Migration[6.1]
  def change
    create_table :nft_collections do |t|
      t.string :made_by

      t.timestamps
    end
  end
end
