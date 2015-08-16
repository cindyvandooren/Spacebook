Spacebook.Views.Friender = Backbone.View.extend({
  template: JST["profile/profile_header/friender"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
