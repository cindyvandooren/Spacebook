Spacebook.Views.PostsIndexItemBody = Backbone.View.extend({
  template: JST["posts/posts_index_item_body"],

  initialize: function (options) {
    this.post = options.post;
  },

  render: function () {
    var renderedContent = this.template({ post: this.post });
    this.$el.html(renderedContent);
    return this;
  }
});
