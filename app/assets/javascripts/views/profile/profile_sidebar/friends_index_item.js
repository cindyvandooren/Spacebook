Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/friends_index_item"],

  tagName: "li",

  className: "friends-list-item",

  initialize: function (options) {
    this.friend = options.friend;
  },

  render: function () {
    var renderedContent = this.template({ friend: this.friend });
    this.$el.html(renderedContent);
    return this;
  }
});
