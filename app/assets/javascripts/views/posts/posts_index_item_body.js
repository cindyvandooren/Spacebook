Spacebook.Views.PostsIndexItemBody = Backbone.View.extend({
  template: JST["posts/posts_index_item_body"],

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});