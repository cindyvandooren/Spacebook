Spacebook.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/friends_index"],

  render: function () {
    var renderedContent = this.template({ friends: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});
