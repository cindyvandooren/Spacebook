Spacebook.Views.ProfileTimeline = Backbone.CompositeView.extend({
  template: JST["profile/profile_content/timeline"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ posts: this.collection });
    this.$el.html(renderedContent);
    return this;
  }
});
