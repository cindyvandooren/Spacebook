class CreateInvitations < ActiveRecord::Migration
  def change
    create_table :invitations do |t|
      t.integer :inviter_id, null: false
      t.integer :invitee_id, null: false
      t.timestamps null: false
    end

    add_index :invitations, :inviter_id
    add_index :invitations, :invitee_id
  end
end
