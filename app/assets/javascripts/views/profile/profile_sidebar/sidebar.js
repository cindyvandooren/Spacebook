Spacebook.Views.ProfileSideBar = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/sidebar"],

  className: "sidebar-navigation",

  initialize: function (options) {
    this.sentInvitations = options.sentInvitations;
    this.receivedInvitations = options.receivedInvitations;
    this.friends = options.friends;
    this.addSentInvitationsIndexView();
    this.addreceivedInvitationsIndexView();
    this.addFriendsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addSentInvitationsIndexView: function () {
    var subview = new Spacebook.Views.InvitationsIndex({
      collection: this.sentInvitations,
      userId: this.model.id,
    });
    this.addSubview(".sent-invitations", subview);
  },

  addreceivedInvitationsIndexView: function () {
    var subview = new Spacebook.Views.InvitationsIndex({
      collection: this.receivedInvitations,
      userId: this.model.id
    });
    this.addSubview(".received-invitations", subview);
  },

  addFriendsIndexView: function () {
    var subview = new Spacebook.Views.FriendsIndex({
      collection: this.friends,
      userId: this.model.id
    });
    this.addSubview(".friends", subview);
  }
});
