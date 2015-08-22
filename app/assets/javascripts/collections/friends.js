Spacebook.Collections.Friends = Backbone.Collection.extend({
  model: Spacebook.Models.Friend,
  url: "/api/friendships"
});
