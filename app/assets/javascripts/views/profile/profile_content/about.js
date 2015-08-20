Spacebook.Views.ProfileAbout = Backbone.View.extend({
  template: JST["profile/profile_content/about"],

  initialize: function (options) {
    this.user = options.user;
  },

  render: function () {
    var renderedContent = this.template({ user: this.user });
    this.$el.html(renderedContent);
    return this;
  }
});
