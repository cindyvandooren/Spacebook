Spacebook.Collections.Users = Backbone.Collection.extend({
  model: Spacebook.Models.User,
  url: "/api/users",

  getOrFetch: function (id) {
    var collection = this;
    var user = collection.get(id);

    if (user) {
      user.fetch();
    } else {
      user = new collection.model({ id: id });
      collection.add(user);
      user.fetch({
        error: function () { collection.remove(user); }
      });
    }

    return user;
  }
});
