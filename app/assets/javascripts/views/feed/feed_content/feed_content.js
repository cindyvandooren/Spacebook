Spacebook.Views.FeedContent = Backbone.View.extend({
  template: JST["feed/feed_content/feed_content"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
