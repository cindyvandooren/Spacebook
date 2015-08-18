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
    this.userId = options.userId;
    this.friends = options.friends;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      invitation: this.model,
      userId: this.userId
     });
    this.$el.html(renderedContent);
    return this;
  },

  deleteInvitation: function (event) {
    var that = this;
    event.preventDefault();

    this.model.destroy({
      success: function () {
        that.collection.remove(that.model);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        console.log("Something went wrong!");
      }
    });
  },

  becomeFriends: function (event) {
    var that = this;
    event.preventDefault();

    var friend = new Spacebook.Models.Friend();
    friend.save({
      own_id: Spacebook.CURRENT_USER_ID,
      friend_id: this.userId },
      { success: function () {
            that.friends.add(friend);
      }
    });

    var otherFriend = new Spacebook.Models.Friend();
    otherFriend.save({
      own_id: this.userId,
      friend_id: Spacebook.CURRENT_USER_ID },
      { success: function () {
          that.friends.add(friend);
      }
    });

    this.model.destroy({
      success: function () {
        that.collection.remove(that.model);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        console.log("Something went wrong!");
      }
    });
  }
});
