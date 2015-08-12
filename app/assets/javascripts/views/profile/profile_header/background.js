Spacebook.Views.HeaderBackground = Backbone.View.extend({
  template: JST["profile/profile_header/background"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template( {user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
