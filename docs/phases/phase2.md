# Phase 2: Viewing Blogs and Posts

## User stories
* If user clicks on About, user will see profile info.
* If user clicks on Update Info, user will see a form to update profile info. Button is only present when user is currently logged in and only on own profile page.
* If user clicks submit, user will be redirected to About page, that contains the updated user info.
* User cannot change username or password.
* User can add profile pictures and replace the default picture with own picture.
* User can add background picture.

## Rails
### Models
User

### Controllers
Api::UsersController (index, show, update)

### Views
* users/user.json.jbuilder (partial)
* users/index.json.jbuilder
* users/show.json.jbuilder

## Backbone
### Models
* User

### Collections
* Users

### Views
* NavbarView
* ProfileContent
* ProfileSideBar
* ProfileHeader
* UserAbout
* UserUpdate

## Gems/Libraries
* Cloudinary
* ejs
* jbuilder
* serializeJSON
* Backbone
