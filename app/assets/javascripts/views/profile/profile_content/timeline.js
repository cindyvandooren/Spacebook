Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  className: "profile-timeline",

  initialize: function (options) {
    this.user = options.user;
    this.timelinePosts = this.user.timelinePosts();
    this.listenTo(this.user, "sync change", this.render);
    this.listenTo(this.timelinePosts, "add remove", this.render);
    this.addPostsIndexView();
    this.addPostFormView();
  },

  render: function () {
    // TODO: Still renders a lot of times, once every time a post is added.
    // Investigate if this really is necessary.
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexView: function () {
    var subview = new Spacebook.Views.PostsIndex({
      user: this.user
    });
    this.addSubview(".posts", subview);
  },

  addPostFormView: function () {
    var newPost = new Spacebook.Models.Post();
    var subview = new Spacebook.Views.PostForm({
      user: this.user,
      post: newPost,
      posts: this.timelinePosts
    });

    if (this.user.escape("id") == Spacebook.CURRENT_USER_ID) {
      this.addSubview(".create-post", subview);
    } else if (this.user.escape("is_a_friend")) {
      this.addSubview(".create-post", subview);
    }
  }
});
