Spacebook.Views.ProfileFriends = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/friends"],

  initialize: function (options) {
    this.userId = options.userId;
    this.friends = new Spacebook.Collections.Friends();
    this.addFriendsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addFriendsIndexView: function () {
    this.friends.fetch({
      data: { id: this.userId }
    });
    var subview = new Spacebook.Views.FriendsIndex({
      collection: this.friends,
      userId: this.model.id
    });
    this.addSubview(".profile-content-friends-list", subview);
  }
});
