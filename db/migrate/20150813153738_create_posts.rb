class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.integer :wall_id, null: false
      t.text :body, null: false
      t.timestamps null: false
    end

    add_index :posts, :author_id
    add_index :posts, :wall_id    
  end
end
