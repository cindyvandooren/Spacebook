Spacebook.Views.PostsIndex = Backbone.CompositeView.extend({
  template: JST["posts/posts_index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addPostsIndexItemView);
    this.collection.each(this.addPostsIndexItemView.bind(this));
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexItemView: function (post) {
    var subview = new Spacebook.Views.PostsIndexItem({ model: post });
    this.addSubview(".posts-index", subview);
  }
});
