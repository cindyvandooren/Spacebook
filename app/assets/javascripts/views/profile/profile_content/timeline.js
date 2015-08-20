Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  className: "profile-timeline",

  initialize: function (options) {
    this.user = options.user;
    this.timelinePosts = this.user.timelinePosts();
    this.listenTo(this.user, "sync change", this.render);
    this.addPostsIndexView();
    this.addPostFormView();
  },

  render: function () {
    debugger;
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexView: function () {
    var subview = new Spacebook.Views.PostsIndex({
      user: this.user,
      posts: this.timelinePosts
    });
    this.addSubview(".posts", subview);
  },

  addPostFormView: function () {
    debugger;
    var newPost = new Spacebook.Models.Post();
    var subview = new Spacebook.Views.PostForm({
      user: this.user,
      post: newPost,
      posts: this.timelinePosts
    });

    if (this.user.escape("id") == Spacebook.CURRENT_USER_ID) {
      this.addSubview(".create-post", subview);
    } else if (this.user.escape("is_a_friend") === "true") {
      this.addSubview(".create-post", subview);
    }
  }
});
