Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  tagName: "li",

  className: "friends-list-item",

  initialize: function (options) {
    this.template = options.itemTemplate;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ friend: this.model });
    this.$el.html(renderedContent);
    this.$el.data("id", this.model.id);
    return this;
  }
});
