Spacebook.Views.HeaderName = Backbone.View.extend({
  template: JST["profile/profile_header/name"],

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});