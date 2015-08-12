Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
    this.collection = options.collection;
  },

  routes: {
    "profiles/:id" : "show",
  },

  show: function (id) {
    var user = this.collection.getOrFetch(id);
    var showView = new Spacebook.Views.ProfileShow({ model: user });
    this.swapView(showView);
  },

  edit: function (id) {
    var user = this.collection.getOrFetch(id);
    var editView = new Spacebook.Views.ProfileEdit({ model: user });
    this.swapView(editView);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
