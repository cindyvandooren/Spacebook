Spacebook.Collections.Notifications = Backbone.Collection.extend({
  model: Spacebook.Models.Notification,

  url: "/api/notifications"
});
