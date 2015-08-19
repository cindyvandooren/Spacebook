Spacebook.Views.FeedContent = Backbone.CompositeView.extend({
  template: JST["feed/feed_content/feed_content"],

  className: "feed-content",

  initialize: function () {
    this.user = this.model;
    this.collection = new Spacebook.Collections.Posts();
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.model, "sync change", this.render);
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
      collection: this.collection,
      model: newPost,
      user: this.user
    });
  },

  addPostsIndexView: function () {
    this.collection.fetch({
      data: { feed: true }
    });

    var subview = new Spacebook.Views.PostsIndex({
      collection: this.collection,
      user: this.user
    });
    this.addSubview(".feed-posts", subview);
  }
});
