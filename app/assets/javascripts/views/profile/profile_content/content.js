Spacebook.Views.ProfileContent = Backbone.View.extend({
  template: JST["profile/profile_content/content"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
