Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.collection = options.collection;
    this.friends = new Spacebook.Collections.Friends();
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

    this.friends.fetch({ data: { id: id } });
    this.invitations.fetch({
      data: { id: id }
    });

    var user = this.collection.getOrFetch(id);
    var showProfileView = new Spacebook.Views.ProfileShow({
      model: user,
      collection: this.collection,
      friends: this.friends,
      invitations: this.invitations,
    });
    this.swapView(showProfileView);
  },

  showFeed: function (id) {
    this.friends.fetch({ data: { id: id } });
    this.invitations.fetch({
      data: { id: id }
    });

    var user = this.collection.getOrFetch(id);
    var showFeedView = new Spacebook.Views.FeedShow({
      model: user,
      collection: this.collection,
      friends: this.friends,
      invitations: this.invitations,
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
