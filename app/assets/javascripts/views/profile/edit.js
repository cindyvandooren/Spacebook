Spacebook.Views.ProfileEdit = Backbone.View.extend({
  template: JST["profile/edit"],

  tagName: "form",

  render: function () {
    var renderedContent = this.template({ user: model });
    this.$el.html(renderedContent);
    return this;
  }
});
