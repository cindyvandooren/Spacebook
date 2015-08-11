window.Spacebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var users = new Spacebook.Collections.Users({});

    var currentUser = new Spacebook.Models.User({
      id: window.CURRENT_USER_ID
    });
    currentUser.fetch();

    var router = new Spacebook.Routers.Router({ collection: users });
    var navbar = new Spacebook.Views.Navbar({ model: currentUser });

    $("#navbar").html(navbar.render().$el);
    Backbone.history.start();
  }
};
