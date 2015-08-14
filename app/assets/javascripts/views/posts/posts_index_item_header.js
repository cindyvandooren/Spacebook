Spacebook.Views.PostsIndexItemHeader = Backbone.View.extend({
  template: JST["posts/posts_index_item_header"],

  className: "post-heading",

  render: function () {
    var renderedContent = this.template({
      post: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
});
