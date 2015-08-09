# Phase 4: User Feeds

## Rails
### Models
* Friends
* Invitations

### Controllers
Api::FriendsController (create, destroy, index)
Api::InvitationsController (create, destroy, index)

### Views
* invitations/invitation.json.jbuilder (partial)
* invitations/show.json.jbuilder
* friends/friend.json.jbuilder (partial)
* friends/show.json.jbuilder

## Backbone
### Models
* Friend
* Invitation

### Collections
* Invitations
* Friends

### Views
* FriendsIndex
* FriendsIndexItem
* InvitationIndex
* InvitationIndexItem

## Gems/Libraries
