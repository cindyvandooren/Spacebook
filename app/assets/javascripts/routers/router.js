Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.collection = options.collection;
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
    var user = this.collection.getOrFetch(id);
    var showProfileView = new Spacebook.Views.ProfileShow({
      model: user,
      collection: this.collection
    });
    this.swapView(showProfileView);
  },

  showFeed: function (id) {
    var user = this.collection.getOrFetch(id);
    var showFeedView = new Spacebook.Views.FeedShow({
      model: user,
      collection: this.collection
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
