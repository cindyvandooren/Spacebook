Spacebook.Views.ProfileFriends = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/friends"],

  initialize: function (options) {
    this.userId = options.userId;
    this.friends = options.friends;
    this.addFriendsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFriendsIndexView: function () {
    var subview = new Spacebook.Views.FriendsIndex({
      collection: this.friends,
      userId: this.userId,
      itemTemplate: JST["profile/profile_content/friends_index_item"]
    });
    this.addSubview(".profile-content-friends-list", subview);
  }
});
