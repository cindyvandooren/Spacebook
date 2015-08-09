# Phase 1: User Authentication, Basic Blogs and Posts

## User stories
* If user clicks Sign In with valid info: user is taken to profile page.
* If user clicks Sign In with invalid info: user gets info and request to change input. User stays on landing page.
* If user clicks Sign Up with valid new info: user is taken to profile page.
* If user clicks Sign Up with invalid new info: user gets info and request to change input. User stays on landing page.

## Rails
### Models
* User

### Controllers
* UsersController (create, new, edit, update)
* SessionsController (create, new, destroy)
* ApplicationController
* StaticPagesController (landing, root)

### Views
* landing.html.erb
* root.html.erb

## Backbone
### Models

### Collections

### Views

## Gems/Libraries
* BCrypt
