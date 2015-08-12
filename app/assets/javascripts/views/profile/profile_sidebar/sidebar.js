Spacebook.Views.ProfileSideBar = Backbone.View.extend({
  template: JST["profile/profile_sidebar/sidebar"],


  render: function () {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});
