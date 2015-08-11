Spacebook.Views.ProfileHeader = Backbone.View.extend({
  template: JST["profile/header"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
