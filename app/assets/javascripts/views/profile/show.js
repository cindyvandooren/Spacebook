Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/show"],

  className: "profile-main-box",

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
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
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addProfileSideBarView: function () {
    var subview = new Spacebook.Views.ProfileSideBar({
      model: this.model
    });
    this.addSubview(".profile-sidebar", subview);
  },

  addProfileHeaderView: function () {
    var subview = new Spacebook.Views.ProfileHeader({
      model: this.model
    });
    this.addSubview(".profile-header", subview);
  },

  addProfileTimelineView: function () {
    var subview = new Spacebook.Views.ProfileTimeline({
      model: this.model
    });
    this.addSubview(".profile-content", subview);
  },

  changeProfileContentViews: function (event) {
    this.$(".active").removeClass("active");
    $(event.currentTarget).addClass("active");
    var view = this;
    if (this.subviews(".profile-content")) {
      var firstView = this.subviews(".profile-content").first();
      view.removeSubview(
        ".profile-content",
        firstView
      );
    }
  },

  changeToAbout: function (event) {
    this.changeProfileContentViews(event);
    var aboutView = new Spacebook.Views.ProfileAbout({
      model: this.model
    });
    this.addSubview(".profile-content", aboutView);
  },

  changeToTimeline: function (event) {
    this.changeProfileContentViews(event);
    var timelineView = new Spacebook.Views.ProfileTimeline({
      model: this.model
    });
    this.addSubview(".profile-content", timelineView);
  },

  changeToFriends: function (event) {
    this.changeProfileContentViews(event);
    var friendsView = new Spacebook.Views.ProfileFriends({
      model: this.model
    });
    this.addSubview(".profile-content", friendsView);
  },

  changeToUpdate: function (event) {
    this.changeProfileContentViews(event);
    var updateView = new Spacebook.Views.ProfileUpdate({
      model: this.model,
      collection: this.collection
    });
    this.addSubview(".profile-content", updateView);
  }
});
