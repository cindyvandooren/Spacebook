Spacebook.Views.ProfileAbout = Backbone.View.extend({
  template: JST["profile/profile_content/about"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
