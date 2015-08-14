Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  initialize: function (options) {
    this.listenTo(this.collection, "sync", this.render);
    this.userId = options.userId;
    this.userName = options.userName;
    this.addPostsIndexView();
    this.addPostFormView();
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    debugger;
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexView: function () {
    var subview = new Spacebook.Views.PostsIndex({
      collection: this.collection,
      userId: this.userId,
      userName: this.userName
    });
    this.addSubview(".posts", subview);
  },

  addPostFormView: function () {
    var newPost = new Spacebook.Models.Post();
    var subview = new Spacebook.Views.PostForm({
      collection: this.collection,
      model: newPost,
      userId: this.userId
    });
    this.addSubview(".create-post", subview);
  }
});
