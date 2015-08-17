Spacebook.Views.ProfileShow = Backbone.CompositeView.extend({
  template: JST["profile/profile_show"],

  className: "profile-main-box",

  initialize: function (options) {
    this.friends = options.friends;
    this.invitations = options.invitations;
    this.timelinePosts = new Spacebook.Collections.Posts();
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
      model: this.model,
      friends: this.friends,
      invitations: this.invitations,
    });
    this.addSubview(".profile-sidebar", subview);
  },

  addProfileHeaderView: function () {
    var subview = new Spacebook.Views.ProfileHeader({
      model: this.model,
      invitations: this.invitations
    });
    this.addSubview(".profile-header", subview);
  },

  addProfileTimelineView: function () {
    this.timelinePosts.fetch({
      data: { id: this.model.id, profile: true }
    });
    var subview = new Spacebook.Views.ProfileTimeline({
      collection: this.timelinePosts,
      userId: this.model.id,
      userName: this.model.get('username'),
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
    this.timelinePosts.fetch({
      data: { id: this.model.id, profile: true }
    });
    this.changeProfileContentViews(event);
    var timelineView = new Spacebook.Views.ProfileTimeline({
      collection: this.timelinePosts,
      userId: this.model.id,
      userName: this.model.get('username'),
    });
    this.addSubview(".profile-content", timelineView);
  },

  changeToFriends: function (event) {
    this.changeProfileContentViews(event);
    var friendsView = new Spacebook.Views.ProfileFriends({
      model: this.model,
      userId: this.model.id,
      friends: this.friends
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
