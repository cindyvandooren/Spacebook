Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  // template: JST["profile/profile_sidebar/friends_index_item"],
  //Change this to pass in the right template when creating the view.

  tagName: "li",

  className: "friends-list-item",

  initialize: function (options) {
    this.template = options.itemTemplate;
    // Pass in the right template when creating the view.
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ friend: this.model });
    this.$el.html(renderedContent);
    this.$el.data("id", this.model.id);
    return this;
  }
});
