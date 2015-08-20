Spacebook.Views.PostForm = Backbone.View.extend({
  template: JST["posts/post_form"],

  className: "edit-create-post",

  events: {
    "click .create-post" : "createPost"
  },

  initialize: function (options) {
    this.post = options.post;
    this.user = options.user;
    this.posts = options.posts;
    this.listenTo(this.post, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      post: this.post,
      timeline_id: this.user.id
    });
    this.$el.html(renderedContent);
    return this;
  },

  createPost: function (event) {
    var that = this;
    event.preventDefault();

    var attrs = this.$el.find('form').serializeJSON();

    this.post.set(attrs);
    this.post.save({}, {
      success: function () {
        $("textarea").val("");
        that.posts.add(that.post, { merge: true });
        that.post = new Spacebook.Models.Post();
        that.render();
      },
      //TODO: Make this a helpful message for the user
      error: function () {
        alert("Something went wrong. Please try again!");
      }
    });
  }
});
