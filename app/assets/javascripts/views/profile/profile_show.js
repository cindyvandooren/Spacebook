Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/profile_show"],

  className: "profile-main-box",

  initialize: function (options) {
    debugger;
    this.user = options.user;
    // this.listenTo(this.user, "sync change", this.render);
    this.addProfileSideBarView();
    this.addProfileHeaderView();
    this.addProfileTimelineView();
  },

  events: {
    "click .sidebar-about" : "changeToAbout",
    "click .sidebar-timeline" : "changeToTimeline",
    "click .sidebar-friends" : "changeToFriends",
    "click .update-info" : "changeToUpdate"
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addProfileSideBarView: function () {
    var subview = new Spacebook.Views.ProfileSideBar({
      user: this.user
    });
    this.addSubview(".profile-sidebar", subview);
  },

  addProfileHeaderView: function () {
    var subview = new Spacebook.Views.ProfileHeader({
      user: this.user
    });
    this.addSubview(".profile-header", subview);
  },

  addProfileTimelineView: function () {
    var subview = new Spacebook.Views.ProfileTimeline({
      user: this.user
    });
    this.addSubview(".profile-content", subview);
  },

  changeProfileContentViews: function (event) {
    this.$(".active").removeClass("active");
    $(event.currentTarget).addClass("active");
    var firstView = this.subviews(".profile-content").first();
    var view = this;
    if (firstView) {
      view.removeSubview(".profile-content", firstView);
    }
  },

  changeToAbout: function (event) {
    this.changeProfileContentViews(event);
    var aboutView = new Spacebook.Views.ProfileAbout({
      user: this.user
    });
    this.addSubview(".profile-content", aboutView);
  },

  changeToTimeline: function (event) {
    this.changeProfileContentViews(event);
    var timelineView = new Spacebook.Views.ProfileTimeline({
      user: this.user
    });
    this.addSubview(".profile-content", timelineView);
  },

  changeToFriends: function (event) {
    this.changeProfileContentViews(event);
    var friendsView = new Spacebook.Views.ProfileFriends({
      user: this.user
    });
    this.addSubview(".profile-content", friendsView);
  },

  changeToUpdate: function (event) {
    this.changeProfileContentViews(event);
    var updateView = new Spacebook.Views.ProfileUpdate({
      user: this.user
    });
    this.addSubview(".profile-content", updateView);
  }
});
