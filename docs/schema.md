# Schema Information

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
type_id     | integer   | not null, foreign key
author_id   | integer   | not null, foreign key
post_id     | integer   | not null, foreign key

type and type_id reference comments, posts or likes

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
type_id     | integer   | not null
author_id   | integer   | not null, foreign key
type and type_id reference comments or posts
author_id references users

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key
author_id   | integer   | not null, foreign key
body        | string    | not null, max 240 chr
post_id references posts
author_id references users

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key
body        | string    | not null, max 240 chr
author_id references user

## invitations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
inviter_id  | integer   | not null
invitee_id  | integer  | not null

## friendships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
own_id      | integer   | not null, foreign key
friend_id   | integer   | not null, foreign key
own_id and friend_id reference users

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary
username        | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
last_note_time  | datetime  |
birthday        | date      |
interests       | string    |
home planet     | string    |
planet of birth | string    |
profile_img     | string    |
background_img  | string    |
