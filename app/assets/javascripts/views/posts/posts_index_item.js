Spacebook.Views.PostsIndexItem = Backbone.CompositeView.extend({
  template: JST["posts/posts_index_item"],

  tagName: "li",

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
    this.addPostsIndexItemHeaderView();
    this.addPostsIndexItemBodyView();
  },

  render: function () {
    var renderedContent = this.template({ post: this.model });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexItemHeaderView: function () {
    var subview = new Spacebook.Views.PostsIndexItemHeader({
      model: this.model
    });
    this.addSubview(".post-index-item-header", subview);
  },

  addPostsIndexItemBodyView: function () {
    var subview = new Spacebook.Views.PostsIndexItemBody({
      model: this.model
    });
    this.addSubview(".post-index-item-body", subview);
  }
});
