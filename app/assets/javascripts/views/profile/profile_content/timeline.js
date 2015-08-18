Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  className: "profile-timeline",

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, "sync", this.fetchPosts);
    this.listenTo(this.collection, "add remove sync", this.render);
    this.userId = options.userId;
    this.userName = options.userName;
    this.addPostsIndexView();
    this.addPostFormView();
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  fetchPosts: function () {
    this.collection.fetch({
      data: { id: this.user.id, profile: true }
    });
  },

  addPostsIndexView: function () {
    var subview = new Spacebook.Views.PostsIndex({
      collection: this.collection,
      userId: this.userId,
      user: this.user
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
