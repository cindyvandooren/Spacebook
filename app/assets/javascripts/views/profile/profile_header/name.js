Spacebook.Views.HeaderName = Backbone.View.extend({
  template: JST["profile/profile_header/name"],

  initialize: function (options) {
    this.user = options.user;
    this.listenTo(this.user, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.user });
    this.$el.html(renderedContent);
    return this;
  }
});
