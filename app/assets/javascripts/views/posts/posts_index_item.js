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
    this.posts = options.posts;
    this.listenTo(this.model, "sync change", this.render);
    this.addPostsIndexItemHeaderView();
    this.addPostsIndexItemBodyView();
    this.addPostsIndexItemFooterView();
  },

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexItemHeaderView: function () {
    var subview = new Spacebook.Views.PostsIndexItemHeader({
      post: this.model,
      user: this.user
    });
    this.addSubview(".post-index-item-header", subview);
  },

  addPostsIndexItemBodyView: function () {
    var subview = new Spacebook.Views.PostsIndexItemBody({
      post: this.model
    });
    this.addSubview(".post-index-item-body", subview);
  },

  addPostsIndexItemFooterView: function () {
    var subview = new Spacebook.Views.PostsIndexItemFooter({
      post: this.model,
      user: this.user
    });
    this.addSubview(".post-index-item-footer", subview);
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
      post: this.model,
      posts: this.posts,
      user: this.user
    });
    this.addSubview(".post-index-item-body", editView);
  },

  changeToPostsIndexItemBody: function (event) {
    this.changePostItemBodyView(event);
    var subview = new Spacebook.Views.PostsIndexItemBody({
      post: this.model
    });
    this.addSubview(".post-index-item-body", subview);
  },

  editPost: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON();

    this.model.save(attrs, {
      success: function () {
        that.posts.add(that.model, {merge: true});
        that.changeToPostsIndexItemBody(event);
      },
      error: function () {
        var modal = new Spacebook.Views.ErrorMessage({
          message: "Posts cannot be blank."
        });
        $("body").append(modal.render().$el);
      }
    });
  },

  deletePost: function (event) {
    var that = this;
    event.preventDefault();
    this.model.destroy({
      success: function () {
        that.posts.remove(that.model);
      },
      error: function () {
        var modal = new Spacebook.Views.ErrorMessage({
          message: "You can only delete your own posts."
        });
        $("body").append(modal.render().$el);
      }
    });
  }
});
