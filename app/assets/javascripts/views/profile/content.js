Spacebook.Views.ProfileContent = Backbone.View.extend({
  template: JST["profile/content"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
