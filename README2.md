# Spacebook

[Heroku link][heroku]

[heroku]: https://spacebookproject.herokuapp.com/

[Project link][project]

[project]: http://www.spacebook.website/

## Minimum Viable Product
Spacebook is a clone of Facebook built on Rails and Backbone. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create users/accounts
- [x] Create sessions (login/logout)
- [x] Implement authentication
- [x] Have an about page for user
- [x] Have a page to update profile
- [x] Create posts
- [x] Delete posts
- [x] Edit posts
- [x] View posts
- [x] Search and find other users
- [x] Send friendship invitations
- [x] Accept friendship invitations
- [x] Show friends on page
- [x] Have a feed page
- [x] Get notified of new changes

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Sign In, Sign Up (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. By the end of this phase, users will be able to log in using a simple text form in a Rails view. The most important part of this phase will be pushing the app to Heroku and ensuring that everything works before moving on to phase 2.

[Details][phase-one]

### Phase 2: User Profile Page (~1 days)
I will add API routes to serve extra user profile information as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this phase, users will be able to edit their profile page and see their about page, all inside a single Backbone app. I plan to use Cloudinary so that the user can upload images for profile and background.

[Details][phase-two]

### Phase 3: Posts (~2 days)
In this phase I will add API routes to serve posts functionality. The API will sent info about the posts as JSON. Then I add Backbone models and collections that fetch data from the API routes. By the end of this phase, the user will be able to create, update, view and destroy posts.

[Details][phase-three]

### Phase 4: Friendship and Invitations (~2 days)
In this phase I will add API routes to serve friend requests (invitation) and friends functionality. A new invitation will be added, when a user clicks on the Friend Button. When the candidate friend accepts, two new friendship rows will be inserted in the database (one for each user). The invitation will be deleted from the database. The user's friends association will be used to show the user's friends in the sidebar. By the end of this phase the user should be able to find and send friend requests to other users, accept or decline friend requests and display all friends.

[Details][phase-four]

### Phase 5: Feed Page (~1 days)
In this phase I will add a Feed button to the navbar. This button will be used to navigate to the Feed. The Feed will have a sidebar and a content field. In the content field all the posts of a user and his friends will be displayed. The sidebar will display the users friends and pending friend invitations. By the end of this phase. The user will be able to view all posts of friends and use the sidebar to accept/decline friend requests and visit friends' profiles.

[Details][phase-five]

### Phase 6: Notifications (~2 days)
In this phase I will set up notifications. Users will get notifications about posts (and later also about comments). I will provide the API routes to the notifications and design the front end as well. By the end of this phase the user will be able to receive notifications about his friends' activities.

[Details][phase-six]

### Bonus Features (TBD)
- [ ] Custom styling for the cloudinary widget
- [ ] Unfriend functionality
- [ ] Use markdown in creation of posts
- [ ] Being able to make comments
- [ ] Like button and counter for posts
- [ ] Have notifications for likes
- [ ] Upload pictures
- [ ] Create photo albums
- [ ] Typeahead search bar

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
