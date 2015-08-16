class CreateFriendships < ActiveRecord::Migration
  def change
    create_table :friendships do |t|
      t.integer :own_id, null: false
      t.integer :friend_id, null: false
      t.timestamps null: false
    end

    add_index :friendships, :own_id
    add_index :friendships, :friend_id
  end
end
