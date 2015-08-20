Spacebook.Views.FeedContent = Backbone.CompositeView.extend({
  template: JST["feed/feed_content/feed_content"],

  className: "feed-content",

  initialize: function (options) {
    this.user = options.user;
    this.wallPosts = new Spacebook.Collections.Posts();
    this.listenTo(this.wallPosts, "sync", this.render);
    this.listenTo(this.user, "sync change", this.render);
    this.addPostFormView();
    this.addPostsIndexView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostFormView: function () {
    var newPost = new Spacebook.Models.Post();
    var subview = new Spacebook.Views.PostForm({
      posts: this.wallPosts,
      post: newPost,
      user: this.user
    });
    this.addSubview(".create-feed-post", subview);
  },

  addPostsIndexView: function () {
    this.wallPosts.fetch({
      data: { feed: true }
    });

    var subview = new Spacebook.Views.PostsIndex({
      posts: this.wallPosts,
      user: this.user
    });
    this.addSubview(".feed-posts", subview);
  }
});
