Spacebook.Views.FeedSideBar = Backbone.CompositeView.extend({
  template: JST["feed/feed_sidebar/feed_sidebar"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.render);
    this.addInvitationsIndexView();
    this.addFriendsOfFriendsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addInvitationsIndexView: function () {
    var subview = new Spacebook.Views.InvitationsIndex({
      user: this.user
    });
    this.addSubview(".all-invitations", subview);
  },

  addFriendsOfFriendsIndexView: function () {
    var subview = new Spacebook.Views.FriendsOfFriendsIndex({
      user: this.user
    });
    this.addSubview(".friends-of-friends", subview);
  }
});
