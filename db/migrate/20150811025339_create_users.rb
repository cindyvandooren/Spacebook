class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.datetime :last_note_time
      t.date :birthday
      t.string :interests
      t.string :home_planet
      t.string :planet_of_birth
      t.string :profile_img_id
      t.string :background_img_id
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end
