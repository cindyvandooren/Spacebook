Spacebook.Views.FeedSideBar = Backbone.CompositeView.extend({
  template: JST["feed/feed_sidebar/feed_sidebar"],

  initialize: function (options) {
    this.user = options.user;
    this.invitations = options.invitations;
    this.addInvitationsIndexView();
    this.addFriendsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addInvitationsIndexView: function () {
    var subview = new Spacebook.Views.InvitationsIndex({
      collection: this.invitations,
    });
    this.addSubview(".all-invitations", subview);
  },

  addFriendsIndexView: function () {
    var subview = new Spacebook.Views.FriendsIndex({
      user: this.user
    });
    this.addSubview(".friends", subview);
  }
});
