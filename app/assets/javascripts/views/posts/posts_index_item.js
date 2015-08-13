Spacebook.Views.PostsIndexItem = Backbone.CompositeView.extend({
  template: JST["posts/posts_index_item"],

  tagName: "li",

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
