Spacebook.Views.FeedSideBar = Backbone.View.extend({
  template: JST["feed/feed_sidebar/feed_sidebar"],

  render: function () {
    var renderedContent = this.template({ user: this. model });
    this.$el.html(renderedContent);
    return this;
  }
});
