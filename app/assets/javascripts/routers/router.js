Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.collection = options.collection;
  },

  routes: {
    "" : "show",
    "profiles/:id" : "show",
  },

  show: function (id) {
    if (!id) {
      id = Spacebook.CURRENT_USER_ID;
    }
    var user = this.collection.getOrFetch(id);
    var showView = new Spacebook.Views.ProfileShow({
      model: user,
      collection: this.collection
    });
    this.swapView(showView);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
