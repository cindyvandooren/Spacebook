Spacebook.Views.InvitationsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/invitations_index_item"],

  tagName: "li",

  className: "invitation-index-item",

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
  }
});
