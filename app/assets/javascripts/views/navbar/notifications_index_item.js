Spacebook.Views.NotificationsIndexItem = Backbone.View.extend({
  template: JST["navbar/notifications_index_item"],

  tagName: "tr",

  className: "notifications-item",

  render: function () {
    var renderedContent = this.template({ notification: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
