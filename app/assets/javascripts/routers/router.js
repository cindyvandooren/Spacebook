Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.collection = options.collection;
  },

  routes: {
    "profile/:id" : "show"
  },

  show: function (id) {
    var user = this.collection.getOrFetch(id);
    debugger;
    // says that model is undefined
    var showView = new Spacebook.Views.ProfileShow({ model: user });
    this.swapView(showView);
  },

  swapView: function (view) {
    this._currentView && this.currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
