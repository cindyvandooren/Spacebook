# Spacebook

####http://www.spacebook.website/

Spacebook is a social networking app for earthlings and non-earthlings alike.
Sign up and keep in touch with your friends from space.

## Screenshot
![screenshot]
[screenshot]: ./docs/screenshot.png

## Highlights
- Single-page Backbone app on RESTful JSON Rails API
- Custom authentication using BCrypt overrides User#password= method
- Advanced Backbone on Rails design patterns such as overriding Model#parse method to facilitate nested data for  user profile info
- Polymorphic like/unlike functionality to keep database normalized

## Features
- Users can create, edit and delete posts.
- They can visit other users' profile pages.
- They can update their own profile page (changing profile pictures and background pictures)
- Users can become friends to other users.
- Users receive notifications when they (or their friends) perform actions.
- Users have a feed page with posts their friends made.
- Users can search for other users.
- Users can like and unlike posts.

## Technologies
- Own implementation for authentication
- Backbone
- Cloudinary + Figaro
- Json jbuilder
- Ruby on Rails
- Javascript
- jQuery
- Postgresql
- Polymorphic Associations

## Todo
- Custom styling for the Cloudinary widget
- Use markdown in the creation of posts
- Comments
- Photo albums
- Typeahead search bar
