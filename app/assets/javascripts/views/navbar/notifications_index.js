Spacebook.Views.NotificationsIndex = Backbone.CompositeView.extend({
  template: JST["navbar/notifications_index"],

  initialize: function (options) {
    this.notifications = options.notifications;
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.notifications, "sync", this.render);
    this.listenTo(this.notifications, "add", this.addNotificationsIndexItemView);
    this.notifications.each(this.addNotificationsIndexItemView.bind(this));
  },

  events: {
    "click .m-background" : "closeModalView",
    "click .close-button" : "closeModalView"
  },

  render: function () {
    var renderedContent = this.template({ notifications: this.notifications });
    this.$el.html(renderedContent);
    this.attachSubviews();
    this.onRender();
    return this;
  },

  addNotificationsIndexItemView: function (notification) {
    var subview = new Spacebook.Views.NotificationsIndexItem({
      model: notification
    });
    this.addSubview(".notifications-index-item", subview);
  },

  closeModalView: function (event) {
    event.preventDefault();
    this.removeAndEnable();
  },

  removeAndEnable: function () {
    this.notifications.each(function (notification) {
      notification.save({ seen: true });
    });
    this.notifications.fetch({ reset: true });
    this.remove();
    $(".search-form").prop("disabled", false);
    $("body").removeClass("modal-preventscroll");
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      $("body").removeClass("modal-preventscroll");
      this.removeAndEnable();
    }
  },

  onRender: function () {
    $("body").addClass("modal-preventscroll");
    $(".search-form").prop("disabled",true);
  }
});
