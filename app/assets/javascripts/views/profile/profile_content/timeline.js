Spacebook.Views.ProfileTimeline = Backbone.View.extend({
  template: JST["profile/profile_content/timeline"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
