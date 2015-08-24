Spacebook.Collections.Notifications = Backbone.Collection.extend({
  model: Spacebook.Models.Like,
  url: "/api/likes"
});
