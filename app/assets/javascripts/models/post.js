Spacebook.Models.Post = Backbone.Model.extend({
  urlRoot:"/api/posts",

  author_details: function () {
    if (!this._author_details) {
      this._author_details = new Spacebook.Models.User({ post: this });
    }
    return this._author_details;
  },

  receiver_details: function () {
    if (!this._receiver_details) {
      this._receiver_details = new Spacebook.Models.User({ post: this });
    }
    return this._receiver_details;
  },

  likers: function () {
    if (!this._likers) {
      this._likers = new Spacebook.Collections.Users({ post: this });
    }

    return this._likers;
  },

  parse: function (response) {
    if (response.author_details) {
      this.author_details().set(response.author_details);
      delete response.author_details;
    }

    if (response.receiver_details) {
      this.receiver_details().set(response.receiver_details);
      delete response.receiver_details;
    }

    if (response.likers) {
      this.likers().set(response.likers);
      delete response.likers;
    }
    return response;
  }
});
