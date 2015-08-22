class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :user_id, null: false
      t.string :body, null: false
      t.boolean :seen, default: false
      t.timestamps null: false
    end

    add_index :notifications, :user_id
  end
end
