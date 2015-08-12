Spacebook.Views.HeaderInfo = Backbone.View.extend({
  template: JST["profile/profile_header/info"],

  tagName: "button",

  className: "update-profile-button",

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template( {user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
