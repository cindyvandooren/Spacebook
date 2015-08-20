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

  invitations: function () {
    if (!this._invitations) {
      this._invitations = new Spacebook.Collections.Invitations();
    }
    return this._invitations;
  },

  timelinePosts: function () {
    if (!this._timelinePosts) {
      this._timelinePosts = new Spacebook.Collections.Posts();
    }
    return this._timelinePosts;
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

    if (response.timeline_posts) {
      this.timelinePosts().set(response.timeline_posts, { parse: true });
      delete response.timeline_posts;
    }

    if (response.invitations) {
      this.invitations().set(response.invitations, { parse: true });
      delete response.invitations;
    }

    return response;
  }
});
