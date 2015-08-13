Spacebook.Collections.Posts = Backbone.Collection.extend({
  model: Spacebook.Models.Post,

  url: "/api/posts",

  getOrFetch: function (id) {
    var collection = this;
    var post = collection.get(id);

    if (post) {
      post.fetch();
    } else {
      post = new collection.model({ id: id });
      collection.add(post);
      post.fetch({
        error: function () { collection.remove(post); }
      });
    }

    return post;
  }
});
