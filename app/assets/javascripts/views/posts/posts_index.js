Spacebook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["posts/posts_index"],

  initialize: function (options) {
    this.user = options.user;
    this.posts = options.posts;
    this.listenTo(this.posts, "sync", this.render);
    this.listenTo(this.posts, "add", this.addPostsIndexItemView);
    this.listenTo(this.posts, "remove", this.removePostsIndexItemView);
    this.posts.each(this.addPostsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexItemView: function (post) {
    var subview = new Spacebook.Views.PostsIndexItem({
      user: this.user,
      model: post,
      posts: this.posts
    });
    this.addSubview(".posts-index", subview, true);
  },

  removePostsIndexItemView: function (post) {
    this.removeModelSubview('.posts-index', post);
  }
});
