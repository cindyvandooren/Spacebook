Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/show"],

  className: "profile-main-box",

  initialize: function () {
    var user = this.model;
    this.listenTo(user, "sync change", this.render);
    this.addProfileSideBarView(user);
    this.addProfileHeaderView(user);
    this.addProfileContentView(user);
    debugger;
  },

  events: {
    "click .sidebar-about" : "changeToAbout",
    "click .sidebar-timeline" : "changeToTimeline",
    "click .sidebar-friends" : "changeToFriends",
    "click .update-info" : "changeToUpdate"
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

  changeProfileContentViews: function (event) {
    this.$(".active").removeClass("active");
    $(event.currentTarget).addClass("active");
  },

  changeToAbout: function (event) {
    console.log("hello");
  },

  changeToTimeline: function (event) {
    console.log("hello");
  },

  changeToFriends: function (event) {
    console.log("hello");
  },

  changeToUpdate: function (event) {
    console.log("hello");
  }
});
