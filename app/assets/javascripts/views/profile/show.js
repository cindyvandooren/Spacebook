Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/show"],

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync", this.render);
    this.addProfileSideBarView(user);
    this.addProfileContentView(user);
    this.addProfileHeaderView(user);
  },

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
