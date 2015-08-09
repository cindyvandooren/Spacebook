# Schema Information

## notifications
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
(references posts or comments or likes)
type_id     | integer   | not null, foreign key
(references posts or comments or likes)
author_id   | integer   | not null, foreign key
post_id     | integer   | not null, foreign key

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
type        | string    | not null
(references posts or comments)
type_id     | integer   | not null
(references posts or comments)
author_id   | integer   | not null, foreign key (references users)

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
post_id     | integer   | not null, foreign key (references posts)
author_id   | integer   | not null, foreign key (references users)
body        | string    | not null, max 240 chr

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users)
body        | string    | not null, max 240 chr

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
(references users)
friend_id   | integer   | not null, foreign key (references users)

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
