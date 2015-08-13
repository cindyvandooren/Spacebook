Spacebook.Views.ProfileUpdate = Backbone.View.extend({
  template: JST["profile/profile_content/update"],

  tagName: "form",

  className: "update-profile",

  events: {
    "click .update-profile" : "updateProfile"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  updateProfile: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.serializeJSON();
    $(":input").val("");

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        $(".sidebar-about").click();
      },
      //TODO Make this a helpful message for the user
      error: function () {
        console.log("Something went wrong");
      }
    });
  }
});
