class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.string :nft_id
      t.string :user_id

      t.timestamps
    end
  end
end
