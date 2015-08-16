# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150816173427) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "friendships", force: :cascade do |t|
    t.integer  "own_id",     null: false
    t.integer  "friend_id",  null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "friendships", ["friend_id"], name: "index_friendships_on_friend_id", using: :btree
  add_index "friendships", ["own_id"], name: "index_friendships_on_own_id", using: :btree

  create_table "invitations", force: :cascade do |t|
    t.integer  "inviter_id", null: false
    t.integer  "invitee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "invitations", ["invitee_id"], name: "index_invitations_on_invitee_id", using: :btree
  add_index "invitations", ["inviter_id"], name: "index_invitations_on_inviter_id", using: :btree

  create_table "posts", force: :cascade do |t|
    t.integer  "author_id",   null: false
    t.integer  "timeline_id", null: false
    t.text     "body",        null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "posts", ["author_id"], name: "index_posts_on_author_id", using: :btree
  add_index "posts", ["timeline_id"], name: "index_posts_on_timeline_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",          null: false
    t.string   "password_digest",   null: false
    t.string   "session_token",     null: false
    t.datetime "last_note_time"
    t.date     "birthday"
    t.string   "interests"
    t.string   "home_planet"
    t.string   "planet_of_birth"
    t.string   "profile_img_id"
    t.string   "background_img_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
