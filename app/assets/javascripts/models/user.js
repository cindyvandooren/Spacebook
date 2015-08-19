Spacebook.Models.User = Backbone.Model.extend({
  urlRoot: "/api/users",

  notifications: function () {
    if (!this._notifications) {
      this._notifications = new Spacebook.Models.Notification();
    }
    return this._notifications;
  },

  parse: function (response) {
    if (response.notifications) {
      this.notifications().set(response.notifications);
      delete response.notifications;
    }
    
    return response;
  }
});
