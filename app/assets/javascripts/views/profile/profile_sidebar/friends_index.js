Spacebook.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/friends_index"],

  initialize: function (options) {
    this.user = options.user;
    this.friends = this.user.friends();
    this.listenTo(this.friends, "sync", this.render);
    this.listenTo(this.friends, "add", this.addFriendsIndexItemView);
    this.friends.each(this.addFriendsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ friends: this.friends });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFriendsIndexItemView: function (friend) {
    var subview = new Spacebook.Views.FriendsIndexItem({
      friend: friend
    });
    this.addSubview(".friends-list", subview);
  }
});
