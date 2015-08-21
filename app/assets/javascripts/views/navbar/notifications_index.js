Spacebook.Views.NotificationsIndex = Backbone.CompositeView.extend({
  template: JST["navbar/notifications_index"],

  initialize: function () {
    $(document).on('keyup', this.handleKey.bind(this));
    this.listenTo(this.collection, "sync", this.render);
    this.listenTo(this.collection, "add", this.addNotificationsIndexItemView);
    this.collection.each(this.addNotificationsIndexItemView.bind(this));
  },

  events: {
    "click .m-background" : "closeModalView",
    "click .close-button" : "closeModalView"
  },

  render: function () {
    var renderedContent = this.template({ notifications: this.collection });
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
    this.remove();
    $(".search-form").prop("disabled", false);
    $("body").removeClass("modal-scroll");
  },

  handleKey: function (event) {
    if (event.keyCode === 27) {
      $("body").removeClass("modal-scroll");
      this.removeAndEnable();
    }
  },

  onRender: function () {
    $("body").addClass("modal-scroll");
    $(".search-form").prop("disabled",true);
  }
});
