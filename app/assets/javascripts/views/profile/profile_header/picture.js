Spacebook.Views.HeaderPicture = Backbone.View.extend({
  template: JST["profile/profile_header/picture"],

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template( {user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
