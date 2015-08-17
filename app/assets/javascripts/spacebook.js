window.Spacebook = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var users = new Spacebook.Collections.Users({});

    var currentUserId = Spacebook.CURRENT_USER_ID;
    var currentUser = users.getOrFetch(currentUserId);
    // var currentUser = new Spacebook.Models.User({ id: currentUserId });
    // currentUser.fetch();

    var router = new Spacebook.Routers.Router({ collection: users });
    var navbar = new Spacebook.Views.Navbar({ model: currentUser });

    $("#navbar").html(navbar.render().$el);
    Backbone.history.start();
  }
};
