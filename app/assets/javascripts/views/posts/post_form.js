Spacebook.Views.PostForm = Backbone.View.extend({
  template: JST["posts/post_form"],

  className: "edit-create-post",

  events: {
    "click .create-post" : "createPost"
  },

  initialize: function (options) {
    this.userId = options.userId;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      post: this.model,
      timeline_id: this.userId
    });
    this.$el.html(renderedContent);
    return this;
  },

  createPost: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        $("textarea").val("");
        that.collection.add(that.model, { merge: true });
        that.model = new Spacebook.Models.Post();
        that.render();
      },
      //TODO: Make this a helpful message for the user
      error: function () {
        console.log("Something went wrong");
      }
    });
  }
});
