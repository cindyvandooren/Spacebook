window.Spacebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Spacebook.Routers.Router();
        
    // TODO: Does not need a model yet. Might have to add that later.
    var navbar = new Spacebook.Views.Navbar();

    $("#navbar").html(navbar.render().$el);
    Backbone.history.start();
  }
};
