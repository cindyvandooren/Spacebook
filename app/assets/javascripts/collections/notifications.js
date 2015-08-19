Spacebook.Collections.Notifications = Backbone.Collection.extend({
  model: Spacebook.Models.Notification,

  url: "/api/notifications",

  getOrFetch: function (id) {
    var collection = this;
    var notification = collection.get(id);

    if (notification) {
      notification.fetch();
    } else {
      notification = new collection.model({ id: id });
      collection.add(notification);
      notification.fetch({
        error: function () { collection.remove(notification); }
      });
    }

    return notification;
  }
});
