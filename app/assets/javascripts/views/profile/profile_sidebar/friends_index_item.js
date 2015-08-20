Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/friends_index_item"],

  tagName: "li",

  className: "friends-list-item",

  initialize: function (options) {
    this.friend = options.friend;
    this.extraInfo = options.extraInfo;
  },

  render: function () {
    var renderedContent = this.template({
      friend: this.friend,
      extraInfo: this.extraInfo
     });
    this.$el.html(renderedContent);
    return this;
  }
});
