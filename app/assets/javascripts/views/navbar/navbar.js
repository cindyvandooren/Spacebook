Spacebook.Views.Navbar = Backbone.View.extend({
  template: JST["navbar/navbar"],

  events: {
    'submit .navbar-form': 'searchUsers',
    "click .notification-button" : "showNotifications"
  },

  initialize: function () {
    this.listenTo(this.model, "sync change", this.render);
    this.notifications = this.model.notifications();
    this.listenTo(this.notifications, "sync change", this.render);
  },

  render: function () {
    var renderedContent = this.template({
      user: this.model,
      number: this.notifications.length
    });
    this.$el.html(renderedContent);
    this.onRender();
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
  },

  showNotifications: function () {
    var notesModal = new Spacebook.Views.NotificationsIndex({
      notifications: this.notifications
    });

    $("body").append(notesModal.render().$el);
  },

  //TODO: The view is being rendered twice, I guess. The issues is that
  // you have to click twice to close the modal.
  onRender: function () {
    if (this.notifications.length > 0) {
      badge.css('background-color', 'red');
    }
      }
});
