Spacebook.Views.HeaderFriend = Backbone.View.extend({
  template: JST["profile/profile_header/friend"],

  initialize: function (options) {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
