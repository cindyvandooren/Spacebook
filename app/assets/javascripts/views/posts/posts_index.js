Spacebook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["posts/posts_index"],

  initialize: function (options) {
    this.user = options.user;
    this.userName = options.userName;
    this.listenTo(this.user, "change:profile_img_id", this.refetchPosts);
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPostsIndexItemView);
    this.listenTo(this.collection, "remove", this.removePostsIndexItemView);
    this.collection.each(this.addPostsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  refetchPosts: function () {
    var that = this;
    debugger;
    this.collection.fetch({ data: { id: this.user.id, profile: true },
      success: function () {
        that.render();
      }
    });
  },

  addPostsIndexItemView: function (post) {
    this.collection.getOrFetch(post.id);
    var subview = new Spacebook.Views.PostsIndexItem({
      model: post,
      collection: this.collection
    });
    this.addSubview(".posts-index", subview, true);
  },

  removePostsIndexItemView: function (post) {
  this.removeModelSubview('.posts-index', post);
}
});
