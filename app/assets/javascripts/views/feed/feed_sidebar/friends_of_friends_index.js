Spacebook.Views.FriendsOfFriendsIndex = Backbone.CompositeView.extend({
  template: JST["feed/feed_sidebar/friends_of_friends_index"],

  initialize: function (options) {
    this.user = options.user;
    this.friendsOfFriends = this.user.friendsOfFriends();
    this.listenTo(this.user, "sync", this.render);
    this.listenTo(
      this.friendsOfFriends,
      "add",
      this.addFriendsOfFriendsIndexItemView
    );
    this.friendsOfFriends.each(
      this.addFriendsOfFriendsIndexItemView.bind(this)
    );
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  countSubViews: function () {
    var count = 0;

    this.eachSubview(function (subview) {
      count += 1;
    });

    return count;
  },

  addFriendsOfFriendsIndexItemView: function (friendOfFriends) {
    debugger;
    var view = this;
    if (view.countSubViews() >= 5) {
      var firstView = view.subviews(".friends-of-friends-list").first();
      view.removeSubview(".friends-of-friends-list", firstView);
    }
    var subview = new Spacebook.Views.FriendsOfFriendsIndexItem({
      friendOfFriends: friendOfFriends
    });
    this.addSubview(".friends-of-friends-list", subview);
  }
});
