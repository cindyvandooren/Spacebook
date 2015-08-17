Spacebook.Views.FriendsIndexItem = Backbone.View.extend({
  template: JST["profile/profile_sidebar/friends_index_item"],

  tagName: "li",

  className: "friends-list-item",

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var renderedContent = this.template({ friend: this.model });
    this.$el.html(renderedContent);
    return this;
  }
});
