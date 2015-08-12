Spacebook.Views.ProfileFriends = Backbone.View.extend({
  template: JST["profile/profile_content/friends"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
