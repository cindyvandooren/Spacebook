Spacebook.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
