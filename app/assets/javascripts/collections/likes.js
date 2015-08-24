Spacebook.Collections.Likes = Backbone.Collection.extend({
  model: Spacebook.Models.Like,
  url: "/api/likes",

  getOrFetch: function (id) {
    var collection = this;
    var like = collection.get(id);

    if (like) {
      like.fetch();
    } else {
      like = new collection.model({ id: id });
      collection.add(like);
      like.fetch({
        error: function () { collection.remove(like); }
      });
    }

    return like;
  }
});
