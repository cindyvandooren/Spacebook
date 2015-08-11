Spacebook.Routers.Router = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = $("#content");
  },

  routes: {
    "users/:id" : "show"
  },

  show: function () {

  },

  swapView: function () {
    this._currentView && this.currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.$el);
    view.render();
  }
});
