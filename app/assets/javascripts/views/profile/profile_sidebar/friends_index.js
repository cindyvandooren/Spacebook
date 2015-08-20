Spacebook.Views.FriendsIndex = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/friends_index"],

  initialize: function (options) {
    this.user = options.user;
    this.friends = this.user.friends();
    this.extraInfo = options.extraInfo;
    this.listenTo(this.friends, "sync", this.render);
    this.listenTo(this.friends, "add", this.addFriendsIndexItemView);
    this.friends.each(this.addFriendsIndexItemView.bind(this));
    this.friendTemplate = options.friendTemplate;
  },

  render: function () {
    var renderedContent = this.template({ friends: this.friends });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFriendsIndexItemView: function (friend) {
    var subview = new Spacebook.Views.FriendsIndexItem({
      friend: friend,
      extraInfo: this.extraInfo
    });
    this.addSubview(".friends-list", subview);
  }
});
