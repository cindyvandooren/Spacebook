Spacebook.Views.PostsIndexItem = Backbone.CompositeView.extend({
  template: JST["posts/posts_index_item"],

  tagName: "li",

  events: {
    "click .post-edit-button" : "changeToEditPost",
    "click .post-delete-button" : "deletePost",
    "click .edit-post" : "editPost"
  },

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
    // this.listenTo(this.collection, "remove", this.render);
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
      model: this.model,
    });
    this.addSubview(".post-index-item-header", subview);
  },

  addPostsIndexItemBodyView: function () {
    var subview = new Spacebook.Views.PostsIndexItemBody({
      model: this.model
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
      model: this.model,
      collection: this.collection
    });
    this.addSubview(".post-index-item-body", editView);
  },

  changeToPostsIndexItemBody: function (event) {
    this.changePostItemBodyView(event);
    var subview = new Spacebook.Views.PostsIndexItemBody({
      model: this.model
    });
    this.addSubview(".post-index-item-body", subview);
  },

  editPost: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON();

    this.model.save(attrs, {
      success: function () {
        that.collection.add(that.model, {merge: true});
        that.changeToPostsIndexItemBody(event);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        console.log("Something went wrong!");
      }
    });
  },

  deletePost: function (event) {
    var that = this;
    event.preventDefault();
    debugger;
    this.model.destroy({
      success: function () {
        that.collection.remove(that.model);
      },

      //TODO: Make this a helpful message for the user.
      error: function () {
        console.log("Something went wrong!");
      }
    });
  }
});
