Spacebook.Views.ProfileSideBar = Backbone.View.extend({
  template: JST["profile/sidebar"],


  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
