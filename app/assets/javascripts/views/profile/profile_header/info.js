Spacebook.Views.HeaderInfo = Backbone.View.extend({
  template: JST["profile/profile_header/info"],

  initialize: function (options) {
    this.user = options.user;
    this.invitations = options.user.invitations();
    this.listenTo(this.user, "sync change", this.render);
  },

  events: {
    "click" : "sendFriendInvitation"
  },

  render: function () {
    var renderedContent = this.template({ user: this.user });
    this.$el.html(renderedContent);
    return this;
  },

  sendFriendInvitation: function () {
    var that = this;
    event.preventDefault();
    var newInvitation = new Spacebook.Models.Invitation();
    newInvitation.save({
      inviter_id: Spacebook.CURRENT_USER_ID,
      invitee_id: that.user.id
    }, {
      success: function () {
        that.invitations.add(newInvitation);
        that.user.set("is_invited", true);
      },

      error: function () {
        alert("Something went wrong! Please try again!");
      }
    });
  }
});
