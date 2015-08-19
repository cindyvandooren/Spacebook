Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.users = options.collection;
    this.invitations = new Spacebook.Collections.Invitations();
  },

  routes: {
    "" : "showProfile",
    "profiles/:id" : "showProfile",
    "feeds/:id" : "showFeed"
  },

  showProfile: function (id) {
    if (!id) {
      id = Spacebook.CURRENT_USER_ID;
    }

    this.invitations.fetch({
      data: { id: id }
    });

    var user = this.users.getOrFetch(id);
    var showProfileView = new Spacebook.Views.ProfileShow({
      user: user,
      collection: this.users,
      invitations: this.invitations,
    });
    this.swapView(showProfileView);
  },

  showFeed: function (id) {
    this.invitations.fetch({
      data: { id: id }
    });

    var user = this.users.getOrFetch(id);
    var showFeedView = new Spacebook.Views.FeedShow({
      user: user,
      invitations: this.invitations
    });
    this.swapView(showFeedView);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
