Spacebook.Views.InvitationsIndex = Backbone.CompositeView.extend({
  template: JST["profile/profile_sidebar/invitations_index"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addInvitationsIndexItemView);
    this.listenTo(this.collection, "remove", this.removeInvitationsIndexItemView);
    // this.collection.each(this.addInvitationsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addInvitationsIndexItemView: function (invitation) {
    var subview = new Spacebook.Views.InvitationsIndexItem({
      model: invitation,
      collection: this.collection,
      user: this.user
    });
    this.addSubview(".invitations-list", subview);
  },

  removeInvitationsIndexItemView: function (invitation) {
    this.removeModelSubview(".invitations-list", invitation);
  }
});
