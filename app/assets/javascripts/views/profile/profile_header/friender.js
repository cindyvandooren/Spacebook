Spacebook.Views.HeaderFriender = Backbone.View.extend({
  template: JST["profile/profile_header/friender"],

  initialize: function () {
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
    event.preventDefault();
    debugger;
  }
});
