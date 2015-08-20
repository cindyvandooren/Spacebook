Spacebook.Collections.Posts = Backbone.Collection.extend({
  model: Spacebook.Models.Post,

  url: "/api/posts"
});
