Spacebook.Views.ProfileSideBar = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/sidebar"],

  className: "sidebar-navigation",

  initialize: function (options) {
    this.invitations = options.invitations;
    this.friends = options.friends;
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
      userId: this.model.id,
      friends: this.friends
    });
    this.addSubview(".all-invitations", subview);
  },

  addFriendsIndexView: function () {
    var subview = new Spacebook.Views.FriendsIndex({
      collection: this.friends,
      userId: this.model.id
    });
    this.addSubview(".friends", subview);
  }
});
