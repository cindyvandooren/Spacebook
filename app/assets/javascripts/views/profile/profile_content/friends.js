Spacebook.Views.ProfileFriends = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/friends"],

  initialize: function (options) {
    this.user = options.user;
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
      user: this.user,
      extraInfo: true
    });
    this.addSubview(".profile-content-friends-list", subview);
  }
});
