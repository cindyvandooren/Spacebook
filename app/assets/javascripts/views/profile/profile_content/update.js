Spacebook.Views.ProfileUpdate = Backbone.View.extend({
  template: JST["profile/profile_content/update"],

  tagName: "form",

  className: "update-profile",

  events: {
    "click .submit" : "updateProfile"
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
