Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/show"],

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync change", this.render);
    this.addProfileSideBarView(user);
    this.addProfileContentView(user);
    this.addProfileHeaderView(user);
  },

  // What happens when there is a sync. Does the user get sent to the subviews? Seems to be that that is not the case now. How to solve this issue? The user needs to be synced all the way down to the profile header background view.
  // Also can I give views the tagname img and how to do that?

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addProfileSideBarView: function (user) {
    var subview = new Spacebook.Views.ProfileSideBar({ model: user });
    this.addSubview(".profile-sidebar", subview);
  },

  addProfileContentView: function (user) {
    var subview = new Spacebook.Views.ProfileContent({ model: user });
    this.addSubview(".profile-content", subview);
  },

  addProfileHeaderView: function (user) {
    var subview = new Spacebook.Views.ProfileHeader({ model: user });
    this.addSubview(".profile-header", subview);
  }
});
