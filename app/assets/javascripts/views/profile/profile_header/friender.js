Spacebook.Views.HeaderFriender = Backbone.View.extend({
  template: JST["profile/profile_header/friender"],

  initialize: function (options) {
    this.invitations = options.invitations;
    this.listenTo(this.model, "sync change", this.render);
  },

  events: {
    "click" : "sendFriendInvitation"
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  sendFriendInvitation: function () {
    var that = this;
    event.preventDefault();
    var newInvitation = new Spacebook.Models.Invitation();
    newInvitation.save({
      inviter_id: Spacebook.CURRENT_USER_ID,
      invitee_id: that.model.id
    }, {
      success: function () {
        that.invitations.add(newInvitation);
      },

      error: function () {
        console.log("Something went wrong");
      }
    });
  }
});
