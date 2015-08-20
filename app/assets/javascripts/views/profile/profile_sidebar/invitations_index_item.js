Spacebook.Views.InvitationsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/invitations_index_item"],

  tagName: "li",

  className: "invitation-index-item",

  events: {
    "click .withdraw-invitation" : "deleteInvitation",
    "click .deny-invitation" : "deleteInvitation",
    "click .approve-invitation" : "becomeFriends"
  },

  initialize: function (options) {
    this.user = options.user;
    this.invitation = options.invitation;
    this.invitations = options.invitations;
    this.friends = this.user.friends();
    this.listenTo(this.invitation, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      invitation: this.invitation,
      user: this.user
     });
    this.$el.html(renderedContent);
    return this;
  },

  deleteInvitation: function (event) {
    var that = this;
    event.preventDefault();

    this.invitation.destroy({
      success: function () {
        that.invitations.remove(that.invitation);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        alert("Something went wrong! Please try again!");
      }
    });
  },

  becomeFriends: function (event) {
    var that = this;
    var inviterId = this.invitation.get('inviter_id');
    event.preventDefault();

    var friend = new Spacebook.Models.Friend();
    friend.save({
      own_id: Spacebook.CURRENT_USER_ID,
      friend_id: inviterId },
      { success: function () {
            that.friends.add(friend);
      }
    });

    var otherFriend = new Spacebook.Models.Friend();
    otherFriend.save({
      own_id: inviterId,
      friend_id: Spacebook.CURRENT_USER_ID },
      { success: function () {
          that.friends.add(otherFriend);
      }
    });

    this.invitation.destroy({
      success: function () {
        that.invitations.remove(that.invitation);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        alert("Something went wrong! Please try again!");
      }
    });
  }
});
