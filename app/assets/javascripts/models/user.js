Spacebook.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  notifications: function () {
    if (!this._notifications) {
      this._notifications = new Spacebook.Collections.Notifications();
    }
    return this._notifications;
  },

  friends: function () {
    if (!this._friends) {
      this._friends = new Spacebook.Collections.Users();
    }
    return this._friends;
  },

  parse: function (response) {
    if (response.notifications) {
      this.notifications().set(response.notifications);
      delete response.notifications;
    }

    if (response.friends) {
      this.friends().set(response.friends);
      delete response.notifications;
    }

    return response;
  }
});
