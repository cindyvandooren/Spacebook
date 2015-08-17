Spacebook.Collections.Friends = Backbone.Collection.extend({
  model: Spacebook.Models.Friend,

  url: "/api/friendships",

  getOrFetch: function (id) {
    var collection = this;
    var friend = collection.get(id);

    if (friend) {
      friend.fetch();
    } else {
      friend = new collection.model({ id: id });
      collection.add(friend);
      friend.fetch({
        error: function () { collection.remove(friend); }
      });
    }

    return friend;
  }
});
