Spacebook.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  events: {
    'submit .navbar-form': 'searchUsers'
  },

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({ user: this.model });
    this.$el.html(renderedContent);
    return this;
  },

  searchUsers: function (event) {
    event.preventDefault();
    var formData = $(event.currentTarget).find('input').val();
    var foundUsers = new Spacebook.Collections.Users();
    if (formData.length === 0) {
      foundUsers.fetch();
    } else {
      foundUsers.fetch({ data: { query: formData } });
    }

    var modal = new Spacebook.Views.SearchResult({
      collection: foundUsers
    });
    $('body').append(modal.render().$el);

    $(event.currentTarget).find('input').val("");
  }
});
