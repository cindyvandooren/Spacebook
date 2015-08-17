Spacebook.Views.HeaderWaitingResponse = Backbone.View.extend({
  template: JST["profile/profile_header/waiting"],

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
