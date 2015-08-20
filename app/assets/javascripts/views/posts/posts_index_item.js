Spacebook.Views.PostsIndexItem = Backbone.CompositeView.extend({
  template: JST["posts/posts_index_item"],

  tagName: "li",

  events: {
    "click .post-edit-button" : "changeToEditPost",
    "click .post-delete-button" : "deletePost",
    "click .edit-post" : "editPost"
  },

  initialize: function (options) {
    this.user = options.user;
    this.post = options.post;
    this.posts = options.posts;
    this.listenTo(this.post, "sync change", this.render);
    this.addPostsIndexItemHeaderView();
    this.addPostsIndexItemBodyView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexItemHeaderView: function () {
    var subview = new Spacebook.Views.PostsIndexItemHeader({
      post: this.post
    });
    this.addSubview(".post-index-item-header", subview);
  },

  addPostsIndexItemBodyView: function () {
    var subview = new Spacebook.Views.PostsIndexItemBody({
      post: this.post
    });
    this.addSubview(".post-index-item-body", subview);
  },

  changePostItemBodyView: function (event) {
    var view = this;
    if (this.subviews(".post-index-item-body")) {
      var firstView = this.subviews(".post-index-item-body").first();
      view.removeSubview(".post-index-item-body", firstView);
    }
  },

  changeToEditPost: function (event) {
    this.changePostItemBodyView(event);
    var editView = new Spacebook.Views.PostForm({
      post: this.post,
      posts: this.posts,
      user: this.user
    });
    this.addSubview(".post-index-item-body", editView);
  },

  changeToPostsIndexItemBody: function (event) {
    this.changePostItemBodyView(event);
    var subview = new Spacebook.Views.PostsIndexItemBody({
      post: this.post
    });
    this.addSubview(".post-index-item-body", subview);
  },

  editPost: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON();

    this.post.save(attrs, {
      success: function () {
        that.posts.add(that.post, {merge: true});
        that.changeToPostsIndexItemBody(event);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        alert("Something went wrong! Please try again!");
      }
    });
  },

  deletePost: function (event) {
    var that = this;
    event.preventDefault();
    this.post.destroy({
      success: function () {
        that.posts.remove(that.post);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        alert("Something went wrong! Please try again!");
      }
    });
  }
});
