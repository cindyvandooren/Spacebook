Spacebook.Views.FriendsOfFriendsIndexItem = Backbone.View.extend({
  template: JST["feed/feed_sidebar/friends_of_friends_index_item"],

  tagName: "li",

  className: "friends-of-friends-index-item",

  initialize: function (options) {
    this.friendOfFriends = options.friendOfFriends;
    this.listenTo(this.friendOfFriends, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      friendOfFriends: this.friendOfFriends
    });
    this.$el.html(renderedContent);
    return this;
  }
});
