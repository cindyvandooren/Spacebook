Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/show"],

  className: "profile-main-box",

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync change", this.render);
    this.addProfileSideBarView(user);
    this.addProfileHeaderView(user);
    this.addProfileContentView(user);
  },

  events: {
    "click .sidebar-about" : "showProfileContentAbout",
    "click .sidebar-timeline" : "showProfileContentTimeline",
    "click .sidebar-friends" : "showProfileContentFriends"
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

  addProfileHeaderView: function (user) {
    var subview = new Spacebook.Views.ProfileHeader({ model: user });
    this.addSubview(".profile-header", subview);
  },

  addProfileContentView: function (user) {
    var subview = new Spacebook.Views.ProfileContent({ model :user });
    this.addSubview(".profile-content", subview);
  },

  switchContentViews: function (event) {
    this.$(".active").removeClass("active");
    $(event.currentTarget).addClass("active");
  }
});
