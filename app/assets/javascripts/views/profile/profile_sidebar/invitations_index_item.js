Spacebook.Views.InvitationsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/invitations_index_item"],

  tagName: "li",

  className: "invitation-index-item",

  events: {
    "click .withdraw-invitation" : "deleteInvitation",
    "click .deny-invitation" : "deleteInvitation"
  },

  initialize: function (options) {
    this.userId = options.userId;
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
  }
});
