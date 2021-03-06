Spacebook.Views.PostsIndexItemHeader = Backbone.View.extend({
  template: JST["posts/posts_index_item_header"],

  className: "post-heading",

  initialize: function (options) {
    this.post = options.post;
    this.user = options.user;
  },

  render: function () {
    var renderedContent = this.template({
      post: this.post,
      user: this.user
    });
    this.$el.html(renderedContent);
    return this;
  }
});
