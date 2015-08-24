Spacebook.Views.PostsIndexItemFooter = Backbone.CompositeView.extend({
  template: JST["posts/posts_index_item_footer"],

  initialize: function (options) {
    this.user = options.user;
    this.post = options.post;
    this.likes = this.post.likes();
    this.listenTo(this.likes, "sync remove", this.render);
    this.listenTo(this.like, "sync", this.render);
  },

  events: {
    "click .like-post" : "likePost",
    "click .unlike-post" : "unlikePost"
  },

  render: function () {
    var renderedContent = this.template({
      user: this.user,
      likes: this.likes,
      num: this.likes.length
    });
    this.$el.html(renderedContent);
    return this;
  },

  likePost: function (event) {
    var that = this;
    event.preventDefault();
    var like = new Spacebook.Models.Like();
    like.save({
      "likeable_id": this.post.id,
      "likeable_type": "Post"
    }, {
      success: function () {
        that.likes.add(like, { merge: true });
      },

      error: function () {
        alert("Your like could not be saved! Please try again!");
      }
    });
  },

  unlikePost: function (event) {
    event.preventDefault();
    var findLike = this.likes.findWhere({ "liker_id": this.user.id });
    var id = findLike.id;
    var like = this.likes.getOrFetch(id);
    var that = this;
    like.destroy({
      success: function () {
        that.likes.remove(that.like);
      },

      error: function () {
        alert("Your like could not be saved! Please try again!");
      }
    });
  }
});
