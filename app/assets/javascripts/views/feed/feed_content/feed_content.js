Spacebook.Views.FeedContent = Backbone.CompositeView.extend({
  template: JST["feed/feed_content/feed_content"],

  className: "feed-content",

  initialize: function (options) {
    this.user = options.user;
    this.feedPosts = new Spacebook.Collections.Posts();
    this.listenTo(this.feedPosts, "sync", this.render);
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
      posts: this.feedPosts,
      post: newPost,
      user: this.user
    });
    this.addSubview(".create-feed-post", subview);
  },

  addPostsIndexView: function () {
    this.feedPosts.fetch({
      data: { feed: true }
    });

    var subview = new Spacebook.Views.PostsIndex({
      posts: this.feedPosts,
      user: this.user
    });
    this.addSubview(".feed-posts", subview);
  }
});
