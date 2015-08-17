Spacebook.Models.Friend = Backbone.Model.extend({
  urlRoot: "/api/friendships",

  friend_details: function () {
    if (!this._friend_details) {
      this._friend_details = new Spacebook.Models.User();
    }
    return this._friend_details;
  },

  parse: function (response) {
    if (response.friend_details) {
      this.friend_details().set(response.friend_details);
      delete response.friend_details;
    }

    return response;
  }
});
