Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
    this.addPostsIndexView();
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    this.attachSubviews();
    return this;
  },

  addPostsIndexView: function () {
    var subview = new Spacebook.Views.PostsIndex({
      collection: this.collection
    });
    this.addSubview(".posts", subview);
  }
});
