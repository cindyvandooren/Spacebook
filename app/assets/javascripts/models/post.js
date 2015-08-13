Spacebook.Models.Post = Backbone.Model.extend({
  urlRoot:"/api/posts",

  author_details: function () {
    if (!this._author_details) {
      this._author_details = new Spacebook.Models.User();
    }
    return this._author_details;
  },

  parse: function (response) {
    if (response.author_details) {
      this.author_details().set(response.author_details);
      delete response.author_details;
    }
    return response;
  }
});
